import { Metadata } from "next";

interface BlogLayoutProps {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: BlogLayoutProps): Promise<Metadata> {
  return {
    title: `블로그 상세 | Allra`,
    description: "블로그 상세 내용을 확인하세요.",
  };
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return children;
}
