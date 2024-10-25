/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: 'hsl(var(--primary-color))',
        secondaryColor: 'hsl(var(--secondary-color))',
        primaryText: 'hsl(var(--primary-text))',
        secondaryText: 'hsl(var(--secondary-text))',
        titleColor: "#F9FAFB",
        subtitleColor: "#D1D5DB",
        tagBg: "#374151",
        expCardBg: "hsl(218 25.8% 12.2%)",
        expCardBg2: "#374151",
      },
      fontFamily: {
        'oswald': ['Oswald'],
        'poppins': ['Poppins'],
      }
    },
  },
  plugins: [],
}

