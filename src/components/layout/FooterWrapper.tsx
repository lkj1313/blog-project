"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer/Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  const showFooter = !pathname.startsWith("/sign-up");

  if (!showFooter) {
    return null;
  }

  return <Footer />;
}
