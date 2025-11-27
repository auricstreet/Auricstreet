/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "auric-dust",
    "auric-eclipse",
    "auric-tear",
    "auric-anomaly",
  ],
  theme: {
  extend: {
    keyframes: {
      twinkle: {
        "0%,100%": { opacity: 0.2 },
        "50%": { opacity: 1 },
      },
      float: {
        "0%,100%": { transform: "translateY(0px) scale(1)" },
        "50%": { transform: "translateY(-20px) scale(1.1)" },
      },
      floatSlow: {
        "0%,100%": { transform: "translateY(0px) scale(1)" },
        "50%": { transform: "translateY(-40px) scale(1.2)" },
      },
    },
    animation: {
      twinkle: "twinkle 3s infinite ease-in-out",
      float: "float 6s infinite ease-in-out",
      "float-slow": "floatSlow 10s infinite ease-in-out",
    },
  },
},

  plugins: [],
};
