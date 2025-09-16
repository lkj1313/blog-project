"use client";

import { useMemo } from "react";
import DOMPurify from "isomorphic-dompurify";

export default function RichHtml({ html }: { html: string }) {
  const clean = useMemo(
    () =>
      DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true }, // 기본 HTML 프로필
      }),
    [html]
  );

  return (
    <div
      className="prose prose-neutral max-w-none
                 prose-h2:mt-8 prose-h3:mt-6
                 prose-img:rounded-xl prose-img:mx-auto
                 prose-a:underline"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
