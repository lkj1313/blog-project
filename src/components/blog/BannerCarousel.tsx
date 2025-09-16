"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlogBanner } from "@/types/blog";
import { useBannerCarousel } from "@/hooks/blog/useBannerCarousel";

export default function BannerCarousel({ banners }: { banners: BlogBanner[] }) {
  if (!banners?.length) return null;

  const { currentIndex, isFirstLoad } = useBannerCarousel(banners);

  return (
    <div
      className="relative md:hidden"
      role="region"
      aria-roledescription="carousel"
    >
      <div className="overflow-hidden">
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-line-200">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={
                isFirstLoad && currentIndex === 0 ? { x: 0 } : { x: "100%" }
              }
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Link href={`/blogs/${banners[currentIndex].id}`}>
                <figure className="relative aspect-[2/1] w-[99%] overflow-hidden rounded-2xl border border-line-200">
                  <Image
                    alt={banners[currentIndex].title}
                    src={banners[currentIndex].thumbnail}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    priority
                  />
                </figure>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
