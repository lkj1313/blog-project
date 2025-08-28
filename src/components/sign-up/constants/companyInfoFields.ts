export interface CompanyInfoFieldConfig {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  disabled: boolean;
  maxLength?: number;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

export const COMPANY_INFO_FIELDS: CompanyInfoFieldConfig[] = [
  {
    id: "companyName",
    label: "상호명",
    placeholder: "올라핀테크",
    type: "text",
    required: false,
    disabled: true,
  },
  {
    id: "representativeName",
    label: "대표자",
    placeholder: "김올라",
    type: "text",
    required: true,
    disabled: false,
  },
  {
    id: "birthDate",
    label: "대표자 생년월일",
    placeholder: "생년월일 8자리 입력 (19900101)",
    type: "text",
    required: true,
    disabled: false,
    maxLength: 8,
    pattern: {
      value: /^\d{8}$/,
      message: "생년월일 8자리를 입력해 주세요.",
    },
  },
  {
    id: "phoneNumber",
    label: "대표자 휴대폰 번호",
    placeholder: "계약서 송부를 위해 꼭 본인정보 입력",
    type: "text",
    required: true,
    disabled: false,
    maxLength: 13,
  },
  {
    id: "email",
    label: "대표자 이메일",
    placeholder: "이메일 입력",
    type: "email",
    required: true,
    disabled: false,
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "올바른 이메일 형식을 입력해 주세요.",
    },
  },
];
