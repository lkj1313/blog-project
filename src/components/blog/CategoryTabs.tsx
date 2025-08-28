"use client";

import { useState, useRef } from "react";
import { Button } from "@/shared/button/Button";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "전체" },
  { id: "trend", label: "트렌드" },
  { id: "tips", label: "운영 팁" },
  { id: "guide", label: "올라가이드" },
  { id: "news", label: "올라소식" },
  { id: "case", label: "고객사례" },
];

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeButtonRect, setActiveButtonRect] = useState<DOMRect | null>(
    null
  );
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);

    const buttonElement = buttonRefs.current[categoryId];
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      const containerRect = buttonElement
        .closest(".scrollbar-hide")
        ?.getBoundingClientRect();

      if (containerRect) {
        setActiveButtonRect({
          ...rect,
          left: rect.left - containerRect.left,
          width: rect.width,
        });
      }
    }
  };

  return (
    <div className="scrollbar-hide flex items-center  border-b border-b-line-200 relative">
      <AnimatePresence>
        {activeButtonRect && (
          <motion.div
            className="absolute bottom-0 h-[2px] bg-label-900"
            style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
            initial={{
              x: activeButtonRect.left,
              width: activeButtonRect.width,
            }}
            animate={{
              x: activeButtonRect.left,
              width: activeButtonRect.width,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {categories.map((category) => (
        <div key={category.id} className="relative">
          <Button
            ref={(el) => {
              buttonRefs.current[category.id] = el;
            }}
            className={`text-body-1 whitespace-nowrap py-[15px] px-5 relative font-semibold ${
              activeCategory === category.id
                ? "text-label-900"
                : "text-label-500"
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.label}
          </Button>
        </div>
      ))}
    </div>
  );
}
