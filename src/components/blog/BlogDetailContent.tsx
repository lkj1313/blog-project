"use client";

import { useBlogDetail } from "@/hooks/blog";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/button/Button";
import Link from "next/link";
import Image from "next/image";
import { RichHtml } from "@/shared/rich-html";

interface BlogDetailContentProps {
  blogId: number;
}

export default function BlogDetailContent({ blogId }: BlogDetailContentProps) {
  const router = useRouter();
  const { data: blog } = useBlogDetail(blogId);

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
    <div className="mx-auto ">
      <div className="mx-auto max-w-(--breakpoint-md)">
        <header>
          <div className="flex items-center gap-1 text-title-4 text-label-700">
            <span className="cursor-pointer">블로그</span>
            <ChevronRight className="w-[20px] h-[20px]" />
            <Link href={`/?category=${blog.category}`}>
              {getCategoryLabel(blog.category)}
            </Link>
          </div>
          <h2 className="mt-6 text-title-3 font-bold md:text-display-2 md:font-semibold">
            {blog.title}
          </h2>
          <p className="mt-2 text-body-3 text-label-500 md:text-title-4">
            {blog.updatedAt}
          </p>
        </header>

        <RichHtml html={blog.content} />
      </div>
    </div>
  );
}
