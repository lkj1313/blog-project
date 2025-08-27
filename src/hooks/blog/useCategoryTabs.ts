"use client";

import { useRef, useState } from "react";

export function useCategoryTabs() {
  const [activeButtonRect, setActiveButtonRect] = useState<DOMRect | null>(
    null
  );
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const updateActiveButtonRect = (categoryId: string) => {
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

  const registerButtonRef = (
    categoryId: string,
    element: HTMLButtonElement | null
  ) => {
    buttonRefs.current[categoryId] = element;
  };

  return {
    activeButtonRect,
    registerButtonRef,
    updateActiveButtonRect,
  };
}
