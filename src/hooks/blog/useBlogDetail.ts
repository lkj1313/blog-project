import { getBlogDetail } from "@/apis/blog";
import { BlogDetailResponse } from "@/types/blog";

// 서버 컴포넌트에서 사용할 함수
export async function fetchBlogDetail(id: number): Promise<BlogDetailResponse> {
  return await getBlogDetail(id);
}
