import { useState } from "react";

interface UseSearchProps {
  onSearch: (searchTerm: string) => void;
}

export function useSearch({ onSearch }: UseSearchProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    onSearch(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClearSearch = () => {
    setInputValue("");
    onSearch("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return {
    inputValue,
    handleSearch,
    handleKeyPress,
    handleClearSearch,
    handleInputChange,
  };
}
