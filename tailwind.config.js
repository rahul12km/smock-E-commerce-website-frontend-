/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
        assist: ["Assistant", "arial"],
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-8px) rotate(-3deg)" },
          "50%": { transform: "translateX(8px) rotate(3deg)" },
          "75%": { transform: "translateX(-8px) rotate(-3deg)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
