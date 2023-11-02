/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
"triangle": "/bg-triangle.svg"
      },
      colors: {
        
        "Dark-Text": "hsl(229, 25%, 31%)",
"Score-Text": "hsl(229, 64%, 46%)",
"Header-Outline": "hsl(217, 16%, 45%)",
"Scissors-Gradient": "hsl(39, 89%, 49%)",
"Scissors-Gradient-2": "hsl(40, 84%, 53%)",
"Paper-Gradient": "hsl(230, 89%, 62%)",
"Paper-Gradient-2":  "hsl(230, 89%, 65%)",
"Rock-Gradient": "hsl(349, 71%, 52%)",
"Rock-Gradient-2": "hsl(349, 70%, 56%)"

      }
    },
  },
  plugins: [],
}

