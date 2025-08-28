"use client";

import { Button } from "@/shared/button/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useCategoryTabs } from "@/hooks/blog/useCategoryTabs";

const categories = [
  { id: "all", label: "전체" },
  { id: "trend", label: "트렌드" },
  { id: "tips", label: "운영 팁" },
  { id: "guide", label: "올라가이드" },
  { id: "news", label: "올라소식" },
  { id: "case", label: "고객사례" },
];

type UiCategory = "all" | "trend" | "tips" | "guide" | "news" | "case";

interface CategoryTabsProps {
  value: UiCategory;
  onChange: (categoryId: UiCategory) => void;
}

export default function CategoryTabs({ value, onChange }: CategoryTabsProps) {
  const { activeButtonRect, registerButtonRef, updateActiveButtonRect } =
    useCategoryTabs();

  const handleCategoryClick = (categoryId: UiCategory) => {
    onChange(categoryId);
    updateActiveButtonRect(categoryId);
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
            ref={(el) => registerButtonRef(category.id, el)}
            className={`text-body-1 whitespace-nowrap py-[15px] px-5 relative font-semibold ${
              value === category.id ? "text-label-900" : "text-label-500"
            }`}
            onClick={() => handleCategoryClick(category.id as UiCategory)}
          >
            {category.label}
          </Button>
        </div>
      ))}
    </div>
  );
}
