"use client";

import { useState } from "react";
import { BlogBanner } from "@/types/blog";
import CategoryTabs from "@/components/blog/CategoryTabs";
import BlogListSection from "@/components/blog/BlogListSection";
import ClientBoundary from "@/shared/boundary/ClientBoundary";
import BannerCarousel from "@/components/blog/BannerCarousel";
import DesktopBanners from "@/components/blog/DesktopBanners";
import BlogHeader from "@/components/blog/BlogHeader";
import { useBlogPagination } from "@/hooks/blog/useBlogPagination";

interface BlogContentProps {
  banners: BlogBanner[];
}

export default function BlogContent({ banners }: BlogContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    category,
    currentPage,
    handleCategoryChange,
    handlePageChange,
    toApiCategory,
  } = useBlogPagination();

  return (
    <>
      <BlogHeader onSearch={setSearchTerm} />

      <section className="mt-8 md:mt-10">
        <BannerCarousel banners={banners} />
        <DesktopBanners banners={banners} />
      </section>

      <section className="mt-8 md:mt-10 lg:mt-11">
        <CategoryTabs value={category} onChange={handleCategoryChange} />
      </section>

      <section className="mt-9 md:mt-10">
        <ClientBoundary resetKeys={[category, searchTerm]}>
          <BlogListSection
            category={toApiCategory[category]}
            page={currentPage}
            onPageChange={handlePageChange}
            searchTerm={searchTerm}
          />
        </ClientBoundary>
      </section>
    </>
  );
}
