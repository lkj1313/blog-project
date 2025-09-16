"use client";

import { useMemo } from "react";
import { Button } from "@/shared/button/Button";
import {
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // 표시할 페이지 번호들을 메모이제이션
  const visiblePages = useMemo(() => {
    const pageSize = 5;
    const currentGroup = Math.ceil(currentPage / pageSize);
    const startPage = (currentGroup - 1) * pageSize + 1;
    const endPage = Math.min(currentGroup * pageSize, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;

  return (
    <>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </Button>
      </div>
      <div className="flex items-center gap-8">
        {visiblePages.map((page) => {
          const isActive = currentPage === page;
          return (
            <Button
              key={page}
              onClick={() => onPageChange(page)}
              className="rounded-full transition-colors"
              style={{
                backgroundColor: isActive ? "#e5e7eb" : "transparent",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                padding: "0",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = "#e5e7eb";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {page}
            </Button>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronsRight />
        </Button>
      </div>
    </>
  );
}
