import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import QueryProvider from "./_providers/query-provider";

export const metadata: Metadata = {
  title: "올라 핀테크 프론트 과제",
  description: "올라 핀테크 프론트 과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <QueryProvider>
          <div className="flex flex-col md:container md:min-h-[calc(100dvh-358px-64px)]">
            <Header />
            <main className="pb-13 pt-[24px] md:py-[40px] lg:py-[80px]">
              {children}
            </main>
          </div>
        </QueryProvider>
        <Footer />
      </body>
    </html>
  );
}
