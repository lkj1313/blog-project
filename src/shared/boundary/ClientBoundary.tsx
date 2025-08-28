"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
  resetKeys?: unknown[];
};

export default function ClientBoundary({
  children,

  resetKeys,
}: Props) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          resetKeys={resetKeys}
          fallbackRender={({ resetErrorBoundary, error }) => (
            <div className="p-4 space-y-2">
              <p>문제가 발생했어요.</p>
              <pre className="text-sm text-red-500">{error.message}</pre>
              <button
                className="underline"
                onClick={() => resetErrorBoundary()}
              >
                다시 시도
              </button>
            </div>
          )}
        >
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
