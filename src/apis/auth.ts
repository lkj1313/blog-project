import fetcher from "@/apis/fetcher";
import { ENDPOINT } from "@/apis/url";
import type {
  LoginArgs,
  LoginResponse,
  MeResponse,
  RegisterArgs,
  RegisterResponse,
  VerifyBusinessNumberArgs,
  VerifyBusinessNumberResponse,
  RefreshTokenResponse,
} from "@/types/auth";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export const saveTokens = (
  partial: Partial<LoginResponse | RefreshTokenResponse>
) => {
  if (partial.accessToken)
    localStorage.setItem(ACCESS_TOKEN_KEY, partial.accessToken);
  if (partial.refreshToken)
    localStorage.setItem(REFRESH_TOKEN_KEY, partial.refreshToken);
};
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
export const deleteTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

export const postLogin = async (body: LoginArgs) => {
  const response = await fetcher.post({
    url: ENDPOINT.AUTH.LOGIN,
    body,
  });
  return response;
};

export const getMe = async () => {
  const accessToken = getAccessToken();
  const response = await fetcher.get({
    url: ENDPOINT.AUTH.ME,
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
  });
  const data = await response.json();
  return data as MeResponse;
};

export const postRegister = async (body: RegisterArgs) => {
  const response = await fetcher.post({
    url: ENDPOINT.AUTH.REGISTER,
    body,
  });
  return response;
};

export const postVerifyBusinessNumber = async (
  body: VerifyBusinessNumberArgs
) => {
  const response = await fetcher.post({
    url: ENDPOINT.AUTH.VERIFY_BUSINESS_NUMBER,
    body,
  });
  return response;
};

export const postReissueAccessToken = async () => {
  const refreshToken = getRefreshToken() ?? "";
  const response = await fetcher.post({
    url: ENDPOINT.AUTH.REFRESH,
    body: { refreshToken },
  });
  return response;
};
