"use client";

import { useSearch } from "@/hooks/blog/useSearch";
import SearchInput from "./SearchInput";

interface BlogHeaderProps {
  onSearch: (searchTerm: string) => void;
}

export default function BlogHeader({ onSearch }: BlogHeaderProps) {
  const {
    inputValue,
    handleSearch,
    handleKeyPress,
    handleClearSearch,
    handleInputChange,
  } = useSearch({ onSearch });

  return (
    <header className="flex flex-col max-md:gap-8 md:flex-row md:items-center md:justify-between">
      <h2 className="text-title-3 font-bold text-label-800 md:text-title-2 lg:text-title-1">
        블로그
      </h2>
      <SearchInput
        value={inputValue}
        onSearch={handleSearch}
        onKeyPress={handleKeyPress}
        onClear={handleClearSearch}
        onChange={handleInputChange}
      />
    </header>
  );
}
