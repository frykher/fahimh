import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "rgb(8, 20, 38)",
        "primary" : "#52eaff",
        "secondary": "rgb(77, 240, 255)",
      }
    },
  },
  plugins: [],
};
export default config;
