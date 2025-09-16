import { Button } from "@/shared/button/Button";
import { Input } from "@/shared/input/Input";
import { Search, CircleX } from "lucide-react";

interface SearchInputProps {
  value: string;
  onSearch: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({
  value,
  onSearch,
  onKeyPress,
  onClear,
  onChange,
}: SearchInputProps) {
  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={onSearch}
        className="absolute top-1/2 left-7 -translate-y-1/2 text-label-700 hover:bg-transparent"
      >
        <Search className="w-[16px] h-[16px]" />
      </Button>
      <Input
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className="rounded-md w-full h-[48px] md:w-[400px] lg:w-[468px] px-6 py-[12.5px] pl-11 border-line-200"
        placeholder="검색어를 입력해주세요"
      />
      {value && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onClear}
          className="absolute top-1/2 right-6 -translate-y-1/2"
        >
          <CircleX className="w-[20px] h-[20px] text-label-700" />
        </Button>
      )}
    </div>
  );
}
