import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
    // Если хотим не расширять, а полностью заменять, тогда в theme прописываем colors
  theme: {
      // colors: {
      //   // ...
      // },
    extend: {
        colors: {
            'tailwind-learning': '#0FE',
        }
    },
  },
  plugins: [
      plugin(function ({addBase, addComponents, addUtilities, theme}) {
          addComponents({
              '.btn': {
                  display: 'inline-block',
              }
          })

          addUtilities({
              '.hide': {
                  display: 'none'
              }
          })
      }),
  ],
}

