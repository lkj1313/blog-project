import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SearchInput from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Components/Blog/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "검색 입력값",
    },
    onSearch: {
      action: "search",
      description: "검색 버튼 클릭 또는 엔터키 입력 시 호출되는 함수",
    },
    onKeyPress: {
      action: "keyPress",
      description: "키보드 입력 시 호출되는 함수",
    },
    onClear: {
      action: "clear",
      description: "검색어 지우기 버튼 클릭 시 호출되는 함수",
    },
    onChange: {
      action: "change",
      description: "입력값 변경 시 호출되는 함수",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    value: "",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <SearchInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSearch={() => console.log("검색:", value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            console.log("엔터키로 검색:", value);
          }
        }}
        onClear={() => setValue("")}
      />
    );
  },
};

// 검색어가 있는 상태
export const WithValue: Story = {
  args: {
    value: "React",
  },
  render: (args) => {
    const [value, setValue] = useState("React");

    return (
      <SearchInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSearch={() => console.log("검색:", value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            console.log("엔터키로 검색:", value);
          }
        }}
        onClear={() => setValue("")}
      />
    );
  },
};

// 긴 검색어
export const WithLongValue: Story = {
  args: {
    value: "Next.js와 TypeScript를 사용한 웹 개발",
  },
  render: (args) => {
    const [value, setValue] = useState("Next.js와 TypeScript를 사용한 웹 개발");

    return (
      <SearchInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSearch={() => console.log("검색:", value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            console.log("엔터키로 검색:", value);
          }
        }}
        onClear={() => setValue("")}
      />
    );
  },
};

// 인터랙티브 데모
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    const handleSearch = () => {
      if (value.trim()) {
        setSearchHistory((prev) => [value, ...prev.slice(0, 4)]);
        console.log("검색 실행:", value);
      }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };

    const handleClear = () => {
      setValue("");
    };

    return (
      <div className="space-y-4">
        <SearchInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSearch={handleSearch}
          onKeyPress={handleKeyPress}
          onClear={handleClear}
        />
        {searchHistory.length > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              최근 검색어:
            </h3>
            <div className="space-y-1">
              {searchHistory.map((term, index) => (
                <div key={index} className="text-sm text-gray-600">
                  {term}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  },
};

// 다양한 크기 데모
export const Responsive: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-medium mb-2">모바일 크기 (기본)</h3>
          <div className="w-full max-w-sm">
            <SearchInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onSearch={() => console.log("검색:", value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  console.log("엔터키로 검색:", value);
                }
              }}
              onClear={() => setValue("")}
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">태블릿 크기 (md)</h3>
          <div className="w-full max-w-md">
            <SearchInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onSearch={() => console.log("검색:", value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  console.log("엔터키로 검색:", value);
                }
              }}
              onClear={() => setValue("")}
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">데스크톱 크기 (lg)</h3>
          <div className="w-full max-w-lg">
            <SearchInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onSearch={() => console.log("검색:", value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  console.log("엔터키로 검색:", value);
                }
              }}
              onClear={() => setValue("")}
            />
          </div>
        </div>
      </div>
    );
  },
};
