"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getBlogDetail } from "@/apis/blog";
import { BlogDetailResponse } from "@/types/blog";

export function useBlogDetail(id: number) {
  return useSuspenseQuery<BlogDetailResponse, Error>({
    queryKey: ["blogDetail", id],
    queryFn: () => getBlogDetail(id),
    staleTime: 10 * 60 * 1000,
    retry: 1,
  });
}
