import { BlogDetailContent } from "@/components/blog";
import { ClientBoundary } from "@/shared/boundary";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blogId = parseInt(params.id);

  if (isNaN(blogId)) {
    return <div>잘못된 블로그 ID입니다.</div>;
  }

  return (
    <article className="max-md:container">
      <ClientBoundary>
        <BlogDetailContent blogId={blogId} />
      </ClientBoundary>
    </article>
  );
}
