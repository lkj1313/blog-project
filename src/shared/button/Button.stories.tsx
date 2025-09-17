import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "버튼의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "버튼의 크기",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 상태",
    },
    asChild: {
      control: "boolean",
      description: "Slot 컴포넌트로 렌더링",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// 다양한 변형들
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

// 다양한 크기들
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: "🚀",
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

// 아이콘과 함께
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span>🚀</span>
        <span>Launch</span>
      </>
    ),
  },
};

// 모든 변형 한번에 보기
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// 모든 크기 한번에 보기
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🚀</Button>
    </div>
  ),
};

// 상태별 버튼들
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="outline" disabled>
          Outline Disabled
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="destructive">Destructive</Button>
        <Button variant="destructive" disabled>
          Destructive Disabled
        </Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost" disabled>
          Ghost Disabled
        </Button>
      </div>
    </div>
  ),
};

// Hover 상태 시뮬레이션
export const HoverStates: Story = {
  render: () => (
    <div className="space-y-6 p-6 border rounded-lg">
      <h3 className="text-lg font-semibold">
        Hover 상태 (마우스를 올려보세요)
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="font-medium">기본 버튼들</h4>
          <div className="flex gap-2">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">특수 버튼들</h4>
          <div className="flex gap-2">
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

// 실제 사용 예시
export const RealWorldExample: Story = {
  render: () => (
    <div className="space-y-4 p-6 border rounded-lg">
      <h3 className="text-lg font-semibold">사용자 액션 예시</h3>
      <div className="flex gap-2">
        <Button>저장</Button>
        <Button variant="outline">취소</Button>
        <Button variant="destructive">삭제</Button>
      </div>
      <div className="flex gap-2">
        <Button size="sm">작은 버튼</Button>
        <Button size="lg">큰 버튼</Button>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost">메뉴</Button>
        <Button variant="link">더보기</Button>
      </div>
    </div>
  ),
};
