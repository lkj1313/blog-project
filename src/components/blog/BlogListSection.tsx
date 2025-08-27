"use client";

import { useBlogList } from "@/hooks/blog/useBlogList";
import Link from "next/link";
import { Pagination } from "@/shared/pagination";
import Image from "next/image";
import { emptyBox } from "@/shared/img";

export default function BlogListSection({
  category,
  page = 1,
  onPageChange,
  searchTerm = "",
}: {
  category?: "NEWS" | "TIP" | "GUIDE" | "EXPERIENCE";
  page?: number;
  onPageChange: (page: number, totalPages?: number) => void;
  searchTerm?: string;
}) {
  const { data } = useBlogList(page, 12, category, searchTerm);

  // 검색 결과가 없을 때
  if (data.list.length === 0) {
    return (
      <>
        {searchTerm && (
          <p className="mb-8 text-body-3 font-medium text-label-500">
            '{searchTerm}'에 대한 {data.totalCount}개의 검색결과
          </p>
        )}
        <div className="flex flex-col items-center justify-center gap-7 md:gap-8">
          <Image
            src={emptyBox}
            alt="빈 상자"
            width={80}
            height={80}
            loading="lazy"
            className="mb-4"
          />
          <p className="text-title-4 font-medium md:text-title-3">
            {searchTerm
              ? `'${searchTerm}'에 대한 검색 결과가 없습니다.`
              : "검색 결과가 없습니다."}
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      {searchTerm && (
        <p className="mb-8 text-body-3 font-medium text-label-500">
          '{searchTerm}'에 대한 {data.totalCount}개의 검색결과
        </p>
      )}
      <div className="grid grid-cols-1 gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.list.map((b) => (
          <Link
            key={b.id}
            href={`/blogs/${b.id}`}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[2/1] overflow-hidden rounded-2xl">
                <img
                  src={b.thumbnail}
                  alt={b.title}
                  className="object-cover absolute inset-0 w-full h-full"
                />
              </div>
              <div>
                <p className="text-body-3 font-medium text-secondary-400">
                  {LABEL[b.category] ?? b.category}
                </p>
                <h3 className="mt-1 line-clamp-2 text-title-4 font-medium">
                  {b.title}
                </h3>
                <p className="mt-5 text-body-3 text-label-500">
                  {b.createdAt.split(" ")[0]}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-6 text-body-2 mt-9 md:mt-10 lg:mt-11">
        <Pagination
          currentPage={page}
          totalPages={data.totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}

const LABEL = {
  NEWS: "뉴스",
  TIP: "운영 팁",
  GUIDE: "가이드",
  EXPERIENCE: "경험담",
} as const;
