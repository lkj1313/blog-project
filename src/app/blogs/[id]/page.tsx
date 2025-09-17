import { BlogDetailContent } from "@/components/blog";
import { fetchBlogDetail } from "@/hooks/blog/useBlogDetail";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blogId = parseInt(params.id);

  if (isNaN(blogId)) {
    return <div>잘못된 블로그 ID입니다.</div>;
  }

  // 서버에서 블로그 데이터를 미리 가져옴
  const blog = await fetchBlogDetail(blogId);

  return (
    <article className="max-md:container">
      <BlogDetailContent blog={blog} />
    </article>
  );
}
