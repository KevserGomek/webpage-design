/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bgImg": "url('/bg-1.png'), url('/bg-2.png')",
      },
      backgroundPosition: {
        'bgPosition': 'left 50px top 30px  , right 50px top 30px',
      },
      colors: {
        darkColor: "#101010",
        lightColor: "#FFFFFF",
        yellowText: "#FEC00A",
        yellowBg:"#FDCA09",
      }
    },
  },
  plugins: [],
};
