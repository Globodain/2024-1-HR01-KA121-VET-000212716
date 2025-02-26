import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#3273dc',
          light: '#4287f5',
          dark: '#2860b9',
          50: '#eef5ff',
          100: '#e0edff',
          200: '#c7ddff',
          300: '#9dc2ff',
          400: '#729dff',
          500: '#3273dc',
          600: '#2860b9',
          700: '#1e4b96',
          800: '#1a3f7c',
          900: '#162e59',
        }
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
