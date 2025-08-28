"use client";

import { useState, startTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// UI 탭 id → API 카테고리 매핑
type UiCategory = "all" | "trend" | "tips" | "guide" | "news" | "case";
type ApiCategory = "NEWS" | "TIP" | "GUIDE" | "EXPERIENCE";

const toApiCategory: Record<UiCategory, ApiCategory | undefined> = {
  all: undefined,
  trend: "NEWS",
  tips: "TIP",
  guide: "GUIDE",
  news: "NEWS",
  case: "EXPERIENCE",
};

export function useBlogPagination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL에서 초기값 가져오기
  const initialPage = parseInt(searchParams.get("page") || "1");
  const initialCategory = (searchParams.get("category") as UiCategory) || "all";

  const [category, setCategory] = useState<UiCategory>(initialCategory);
  const [currentPage, setCurrentPage] = useState(initialPage);

  // URL 쿼리 파라미터 업데이트 함수
  const updateURL = (newPage: number, newCategory: UiCategory) => {
    const params = new URLSearchParams();
    params.set("page", newPage.toString());
    if (newCategory !== "all") {
      params.set("category", newCategory);
    }
    router.push(`?${params.toString()}`);
  };

  const handleCategoryChange = (next: UiCategory) => {
    startTransition(() => {
      setCategory(next);
      setCurrentPage(1);
      updateURL(1, next);
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateURL(page, category);
  };

  return {
    // 상태
    category,
    currentPage,

    // 이벤트 핸들러
    handleCategoryChange,
    handlePageChange,

    // 유틸리티
    toApiCategory,
  };
}
