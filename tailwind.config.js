/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 不要求还原字体，使用系统默认字体
        smiley: ["Microsoft YaHei", "PingFang SC", "system-ui", "sans-serif"],
        dfphei: ["Microsoft YaHei", "PingFang SC", "system-ui", "sans-serif"],
        "poppins-800": ["system-ui", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
