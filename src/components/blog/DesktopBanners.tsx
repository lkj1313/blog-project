import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogBanner } from "@/types/blog";

export default function DesktopBanners({ banners }: { banners: BlogBanner[] }) {
  if (!banners?.length) return null;

  return (
    <div className="hidden gap-6 md:flex">
      {banners.map((banner) => (
        <Link key={banner.id} className="grow" href={`/blogs/${banner.id}`}>
          <figure className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-line-200">
            <Image
              alt={banner.summary}
              src={banner.thumbnail}
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              priority
            />
          </figure>
        </Link>
      ))}
    </div>
  );
}
