/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ps-blue': '#16a34a',
        'ps-blue-glow': 'rgba(22, 163, 74, 0.45)',
        'iran-green': '#16a34a',
        'iran-green-light': '#22c55e',
        'iran-red': '#dc2626',
        'iran-red-light': '#ef4444',
        'iran-red-glow': 'rgba(220, 38, 38, 0.45)',
        'ps-black': '#070b08',
        'ps-surface': 'rgba(10, 16, 12, 0.94)',
        'ps-card': 'rgba(12, 20, 15, 0.92)',
        'ps-border': 'rgba(34, 197, 94, 0.22)',
      },
      borderRadius: {
        'ps-xl': '1rem',
        'ps-2xl': '1.5rem',
        'ps-3xl': '2rem',
      },
      fontFamily: {
        'ps5': ["Vazirmatn", "Tahoma", "Segoe UI", "Inter", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
}
