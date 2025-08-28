import { getBlogDetail } from "@/apis/blog";
import BlogDetailContent from "@/components/blog/BlogDetailContent";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  try {
    const blogId = parseInt(params.id);

    if (isNaN(blogId)) {
      notFound();
    }

    const blogDetail = await getBlogDetail(blogId);

    return (
      <article className="max-md:container">
        <BlogDetailContent blog={blogDetail} />
      </article>
    );
  } catch (error) {
    console.error("블로그 상세 정보를 불러오는 중 오류가 발생했습니다:", error);
    notFound();
  }
}
