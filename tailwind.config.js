/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            // Primary
            softBlue: 'hsl(231, 69%, 60%)',
            softRed: 'hsl(0, 94%, 66%)',
            // Neutral
            grayishBlue: 'hsl(229, 8%, 60%)',
            veryDarkBlue: 'hsl(229, 31%, 21%)',
         },

         fontFamily: {
            rubik: ['Rubik', 'sans-serif'],
         },

         keyframes: {
            open: {
               '0%': {
                  opacity: 0,
               },
               '50%': {
                  opacity: 0.5,
               },
               '100%': {
                  opacity: 1,
               },
            },

            close: {
               from: {
                  opacity: 1,
               },
               to: {
                  opacity: 0,
               },
            },
         },
         animation: {
            openShow: 'open 0.6s ease-in-out',
            closeShow: 'close 0.3s linear',
         },
      },
   },
   plugins: [],
};
