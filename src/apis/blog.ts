import fetcher from "@/apis/fetcher";
import { ENDPOINT } from "@/apis/url";
import type {
  BlogBanner,
  BlogListResponse,
  BlogDetailResponse,
} from "@/types/blog";

/** 블로그 배너 조회 */
export const getBlogBanners = async () => {
  const response = await fetcher.get({
    url: ENDPOINT.BLOGS.BANNERS,
  });
  const data = await response.json();
  return data as BlogBanner[];
};

/** 블로그 목록 조회 */
export const getBlogList = async (params?: {
  page?: number;
  pageSize?: number;
  category?: "NEWS" | "TIP" | "GUIDE" | "EXPERIENCE";
  term?: string;
}) => {
  const searchParams = new URLSearchParams();
  if (params?.page != null) searchParams.append("page", String(params.page));
  if (params?.pageSize != null)
    searchParams.append("pageSize", String(params.pageSize));
  if (params?.category) searchParams.append("category", params.category);
  if (params?.term) searchParams.append("term", params.term);

  const qs = searchParams.toString();
  const response = await fetcher.get({
    url: `${ENDPOINT.BLOGS.LIST}${qs ? `?${qs}` : ""}`,
  });
  const data = await response.json();
  return data as BlogListResponse;
};

/** 블로그 상세 조회 */
export const getBlogDetail = async (id: number) => {
  const response = await fetcher.get({
    url: ENDPOINT.BLOGS.DETAIL(id),
  });
  const data = await response.json();
  return data as BlogDetailResponse;
};
