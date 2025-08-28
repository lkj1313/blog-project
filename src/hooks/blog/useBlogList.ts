"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getBlogList } from "@/apis/blog";
import { BlogListResponse } from "@/types/blog";

export function useBlogList(
  page?: number,
  pageSize?: number,
  category?: "NEWS" | "TIP" | "GUIDE" | "EXPERIENCE",
  term?: string
) {
  return useSuspenseQuery<BlogListResponse, Error>({
    queryKey: ["blogList", page, pageSize, category, term],
    queryFn: () => getBlogList({ page, pageSize, category, term }),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}
