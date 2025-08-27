import fetcher from "@/apis/fetcher";
import { ENDPOINT } from "@/apis/url";
import type {
  BlogBanner,
  BlogListResponse,
  BlogDetailResponse,
} from "@/types/blog";

export const getBlogBanners = async () => {
  const response = await fetcher.get({
    url: ENDPOINT.BLOGS.BANNERS, // 전체 URL 반환한다고 가정
  });
  const data = await response.json();
  return data as BlogBanner[];
};

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

export const getBlogDetail = async (id: number) => {
  const response = await fetcher.get({
    url: ENDPOINT.BLOGS.DETAIL(id), // 함수 호출 결과 그대로
  });
  const data = await response.json();
  return data as BlogDetailResponse;
};
