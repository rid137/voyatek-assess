import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), #14101D)',
      },
    },
  },
  plugins: [],
} satisfies Config;
