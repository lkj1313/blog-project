/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2.5rem",
        lg: "20px",
      },
      screens: {
        sm: "100%",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
      },
    },
    extend: {
      spacing: {
        0: "0",
        1: "0.125rem",
        2: "0.25rem",
        3: "0.375rem",
        4: "0.5rem",
        5: "0.625rem",
        6: "1rem",
        7: "1.25rem",
        8: "1.5rem",
        9: "2rem",
        10: "2.5rem",
        11: "3rem",
        12: "3.5rem",
        13: "4rem",
        14: "5rem",
        header: "60px",
        "breadcrumb-tablet": "40px",
        "breadcrumb-mobile": "33px",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        primary: "#18A0FB",
        secondary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          600: "#2563EB",
          700: "#1D4ED8",
          default: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        label: {
          100: "#F9FAFB",
          500: "#9CA3AF",
          700: "#6E747E",
          800: "#32373F",
          900: "#0D0E0E",
        },
        background: {
          default: "#FFFFFF",
          alternative: "#F5F6FA",
        },
        component: {
          dark: "#23272E",
          light: "#D1D5DB",
          assistive: "#F8FAFC",
          alternative: "#F1F5F9",
        },
        line: {
          200: "#F3F4F6",
          400: "#DFE3E8",
          800: "#111827",
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
        foreground: "hsl(var(--foreground))",
        card: {
          default: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          default: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          default: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          default: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          default: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        strong:
          "1px -2px 10px rgba(96, 100, 136, 0.1), -1px 4px 16px rgba(96, 100, 136, 0.12)",
        heavy:
          "1px 8px 20px rgba(70, 79, 94, 0.2), -1px -8px 16px rgba(50, 55, 63, 0.16)",
      },
      fontSize: {
        "display-1": [
          "48px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.02em",
          },
        ],
        "display-2": [
          "40px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.02em",
          },
        ],
        "title-1": [
          "32px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.02em",
          },
        ],
        "title-2": [
          "26px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.02em",
          },
        ],
        "title-3": [
          "20px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.02em",
          },
        ],
        "title-4": [
          "18px",
          {
            lineHeight: "144%",
            letterSpacing: "-0.02em",
          },
        ],
        "body-1": [
          "16px",
          {
            lineHeight: "150%",
            letterSpacing: "-0.01em",
          },
        ],
        "body-2": [
          "15px",
          {
            lineHeight: "150%",
            letterSpacing: "-0.01em",
          },
        ],
        "body-3": [
          "14px",
          {
            lineHeight: "150%",
            letterSpacing: "-0.01em",
          },
        ],
        "caption-1": [
          "12px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.01em",
          },
        ],
        "caption-2": [
          "11px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.01em",
          },
        ],
      },
      borderRadius: {
        "2xs": "2px",
        xs: "4px",
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "12px",
        "2xl": "14px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
