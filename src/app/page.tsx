import { getBlogBanners } from "@/apis/blog";
import BlogContent from "@/components/blog/BlogContent";

export default async function Home() {
  const banners = await getBlogBanners();

  return (
    <article className="max-md:container">
      <BlogContent banners={banners} />
    </article>
  );
}
