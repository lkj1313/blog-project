export interface AgreementItem {
  id: string;
  label: string;
  required: boolean;
  description?: string;
}

export const AGREEMENT_ITEMS: AgreementItem[] = [
  {
    id: "service",
    label: "서비스 이용약관 동의",
    required: true,
    description: "서비스 이용에 필요한 기본 약관에 동의합니다.",
  },
  {
    id: "privacy",
    label: "개인(신용)정보 수집 및 이용동의",
    required: true,
    description: "개인정보 수집 및 이용에 대한 동의입니다.",
  },
  {
    id: "provision",
    label: "개인(신용)정보 제공 및 위탁동의",
    required: true,
    description: "개인정보 제공 및 위탁에 대한 동의입니다.",
  },
  {
    id: "inquiry",
    label: "개인(신용)정보 조회 동의",
    required: true,
    description: "개인정보 조회에 대한 동의입니다.",
  },
  {
    id: "marketing",
    label: "마케팅 활용 및 광고성 정보 수신동의",
    required: false,
    description:
      "마케팅 목적으로 개인정보를 활용하고 광고성 정보를 수신하는 것에 대한 동의입니다.",
  },
];

export const REQUIRED_AGREEMENT_IDS = [
  "service",
  "privacy",
  "provision",
  "inquiry",
] as string[];
