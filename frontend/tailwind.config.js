/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pitch': "url('https://res.cloudinary.com/doy8hfzvk/image/upload/v1681842404/afb9101577d749b22e01ff13d32f5f9e_ykgxhl.jpg')",
        
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
