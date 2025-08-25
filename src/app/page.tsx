import { Button } from "@/shared/button/Button";
import { Input } from "@/shared/input/Input";
import { Search, CircleX } from "lucide-react";
import { getBlogBanners } from "@/apis/blog";
import BannerCarousel from "@/components/blog/BannerCarousel";
import DesktopBanners from "@/components/blog/DesktopBanners";

export default async function Home() {
  const banners = await getBlogBanners();

  return (
    <article className="max-md:container ">
      <header className="flex flex-col max-md:gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className="text-title-3 font-bold text-label-800 md:text-title-2 lg:text-title-1">
          블로그
        </h2>
        <div className="relative">
          <Search className="w-[16px] h-[16px] absolute top-1/2 left-7 -translate-y-1/2 text-label-700 pointer-events-none" />
          <Input
            className="rounded-md w-full h-[48px] md:w-[400px] lg:w-[468px] px-6 py-[12.5px] pl-11 border-line-200  "
            placeholder="검색어를 입력해주세요"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-6 -translate-y-1/2  "
          >
            <CircleX className="w-[20px] h-[20px] text-label-700" />
          </Button>
        </div>
      </header>
      <section className="mt-8 md:mt-10">
        <BannerCarousel banners={banners} />
        <DesktopBanners banners={banners} />
      </section>
    </article>
  );
}
