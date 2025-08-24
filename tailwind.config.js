/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          500: "#3B82F6",
        },
        secondary: {
          700: "#1D4ED8",
          600: "#2563EB",
          400: "#60A5FA",
          300: "#93C5FD",
          200: "#BFDBFE",
          100: "#DBEAFE",
          50: "#EFF6FF",
        },
        label: {
          900: "#0D0E0E",
          800: "#32373F",
          700: "#6E747E",
          500: "#9CA3AF",
          100: "#F9FAFB",
        },
        background: {
          DEFAULT: "#FFFFFF",
          alternative: "#DFE3E8",
        },
        component: {
          dark: "#23272E",
          light: "#D1D5DB",
          assistive: "#F8FAFC",
          alternative: "#F1F5F9",
        },
        line: {
          800: "#111827",
          400: "#DFE3E8",
          200: "#F3F4F6",
        },
        status: {
          correct: "#07CC32",
          error: "#FF2D2D",
          caution: "#FCBE1D",
          disable: "#CBD5E1",
        },
        material: {
          scroll: "rgba(55, 65, 81, 0.32)",
          dim: "rgba(10, 10, 10, 0.75)",
        },
      },
      boxShadow: {
        strong:
          "1px -2px 10px rgba(96, 100, 136, 0.1), -1px 4px 16px rgba(96, 100, 136, 0.12)",
        heavy:
          "1px 8px 20px rgba(70, 79, 94, 0.2), -1px -8px 16px rgba(50, 55, 63, 0.16)",
      },
      fontSize: {
        "display-1": ["48px", { lineHeight: "140%", letterSpacing: "-0.02em" }],
        "display-2": ["40px", { lineHeight: "140%", letterSpacing: "-0.02em" }],

        "title-1": ["32px", { lineHeight: "140%", letterSpacing: "-0.02em" }],
        "title-2": ["26px", { lineHeight: "140%", letterSpacing: "-0.02em" }],
        "title-3": ["20px", { lineHeight: "140%", letterSpacing: "-0.02em" }],
        "title-4": ["18px", { lineHeight: "144%", letterSpacing: "-0.02em" }],

        "body-1": ["16px", { lineHeight: "150%", letterSpacing: "-0.01em" }],
        "body-2": ["15px", { lineHeight: "150%", letterSpacing: "-0.01em" }],
        "body-3": ["14px", { lineHeight: "150%", letterSpacing: "-0.01em" }],

        "caption-1": ["12px", { lineHeight: "140%", letterSpacing: "-0.01em" }],
        "caption-2": ["11px", { lineHeight: "140%", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        "2xs": "2px",
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        "2xl": "14px",
      },
    },
  },
  plugins: [],
};
