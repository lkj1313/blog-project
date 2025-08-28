"use client";

import { BlogDetailResponse } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/button/Button";

interface BlogDetailContentProps {
  blog: BlogDetailResponse;
}

export default function BlogDetailContent({ blog }: BlogDetailContentProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap = {
      NEWS: "뉴스",
      TIP: "팁",
      GUIDE: "가이드",
      EXPERIENCE: "경험담",
    };
    return categoryMap[category as keyof typeof categoryMap] || category;
  };

  return (
    <div className="py-8 md:py-12">
      {/* 뒤로가기 버튼 */}
      <Button
        variant="ghost"
        onClick={handleGoBack}
        className="mb-6 text-label-700 hover:text-label-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        목록으로 돌아가기
      </Button>

      {/* 블로그 헤더 */}
      <header className="mb-8">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-600 bg-primary-50 rounded-full">
            {getCategoryLabel(blog.category)}
          </span>
        </div>

        <h1 className="text-title-2 md:text-title-1 font-bold text-label-800 mb-4">
          {blog.title}
        </h1>

        <p className="text-body-2 text-label-600 mb-6">{blog.summary}</p>

        <div className="flex items-center gap-6 text-sm text-label-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>작성일: {formatDate(blog.createdAt)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>수정일: {formatDate(blog.updatedAt)}</span>
          </div>
        </div>
      </header>

      {/* 썸네일 이미지 */}
      {blog.thumbnail && (
        <div className="mb-8">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      )}

      {/* 블로그 내용 */}
      <div className="prose prose-lg max-w-none">
        <div
          className="text-body-1 text-label-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
