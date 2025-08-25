import APIError from "@/apis/error/APIError";
import { ENDPOINT } from "@/apis/url";
import { ROUTE_PATH } from "@/shared/constants/routes";
import { deleteTokens, postReissueAccessToken } from "@/apis/auth";

type Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

interface RequestProps {
  url: string;
  method: Method;
  body?: object | object[];
  headers?: Record<string, string>;
  credentials?: RequestCredentials;
  signal?: AbortSignal;
}
type FetchProps = Omit<RequestProps, "method">;

let refreshPromise: Promise<Response> | null = null;

const parseJsonSafe = async (res: Response) => {
  try {
    const text = await res.clone().text();
    if (!text) return null;
    return JSON.parse(text);
  } catch {
    return null;
  }
};

const rawFetch = (props: RequestProps) => {
  const {
    url,
    method,
    body,
    headers = {},
    credentials = "omit",
    signal,
  } = props;

  const isGet = method === "GET";
  const hasBody = body != null;

  const hdr = new Headers(headers);
  if (!isGet && hasBody && !hdr.has("Content-Type")) {
    hdr.set("Content-Type", "application/json");
  } else if (isGet && hdr.has("Content-Type")) {
    hdr.delete("Content-Type");
  }

  return fetch(url, {
    method,
    credentials,
    signal,
    headers: hdr,
    body: !isGet && hasBody ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
};

const request = async (requestProps: RequestProps) => {
  try {
    const res = await rawFetch(requestProps);
    if (!res.ok) {
      await handleError(res, requestProps);
    }
    return res;
  } catch (err) {
    if (err instanceof APIError) throw err;
    throw new APIError(0, "NETWORK_ERROR", "네트워크 오류가 발생했습니다.");
  }
};

const handleError = async (response: Response, requestProps: RequestProps) => {
  const payload = await parseJsonSafe(response);
  const errorCode = (payload as any)?.errorCode || (payload as any)?.code;
  const errorMessage =
    (payload as any)?.errorMessage || (payload as any)?.message;

  if (response.status === 401) {
    if (requestProps.url === ENDPOINT.AUTH.REFRESH) {
      throw new APIError(401, errorCode, errorMessage, payload);
    }
    return handleUnauthorized(requestProps, errorCode, errorMessage, payload);
  }

  throw new APIError(response.status, errorCode, errorMessage, payload);
};

const handleUnauthorized = async (
  originalReq: RequestProps,
  code?: string,
  message?: string,
  raw?: unknown
) => {
  if (!refreshPromise) {
    refreshPromise = postReissueAccessToken();
  }

  try {
    const refreshRes = await refreshPromise;
    refreshPromise = null;

    if (refreshRes?.status === 200) {
      return await rawFetch(originalReq);
    }

    throw new Error("refresh failed");
  } catch {
    refreshPromise = null;
    await deleteTokens?.();
    if (typeof window !== "undefined") {
      window.location.href = ROUTE_PATH.root;
    }
    throw new APIError(401, code, message, raw);
  }
};

const fetcher = {
  get: ({ url, headers, signal, credentials }: FetchProps) =>
    request({ url, method: "GET", headers, signal, credentials }),

  post: ({ url, body, headers, signal, credentials }: FetchProps) =>
    request({ url, method: "POST", body, headers, signal, credentials }),

  patch: ({ url, body, headers, signal, credentials }: FetchProps) =>
    request({ url, method: "PATCH", body, headers, signal, credentials }),

  put: ({ url, body, headers, signal, credentials }: FetchProps) =>
    request({ url, method: "PUT", body, headers, signal, credentials }),

  delete: ({ url, headers, signal, credentials }: FetchProps) =>
    request({ url, method: "DELETE", headers, signal, credentials }),
};

export default fetcher;
