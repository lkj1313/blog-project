import Link from "next/link";
import { Button } from "@/shared/button/Button";
import { ArrowLeft, Search } from "lucide-react";

export default function BlogNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="mb-8">
        <Search className="w-16 h-16 text-label-400 mx-auto mb-4" />
        <h1 className="text-title-2 font-bold text-label-800 mb-2">
          블로그를 찾을 수 없습니다
        </h1>
        <p className="text-body-1 text-label-600">
          요청하신 블로그가 존재하지 않거나 삭제되었을 수 있습니다.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          이전 페이지로
        </Button>

        <Link href="/">
          <Button className="flex items-center gap-2">블로그 목록으로</Button>
        </Link>
      </div>
    </div>
  );
}
