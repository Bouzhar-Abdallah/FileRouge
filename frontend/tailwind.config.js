/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'darkBlue': '#0B2545',
        'lightBlue': '#00C6BD',
        'yellow': '#FFF7D6',
        'lightGray': '#E2F0FF',
        'darkGray': '#B2C2ED',
        'yellow': '#ffc82c',
      },
      backgroundImage: {
        'pitch': "url('https://res.cloudinary.com/doy8hfzvk/image/upload/v1681842404/afb9101577d749b22e01ff13d32f5f9e_ykgxhl.jpg')",
        
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
