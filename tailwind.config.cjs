/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "426px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            fontSize: {
                xxs: ".625rem",
            },
            fontFamily: {
                // sans: ["Roboto", "Helvetica Neue", "Arial", "Noto Sans"],
                serif: [
                    "Source Serif Pro",
                    "ui-serif",
                    "Georgia",
                    "Cambria",
                    "Times New Roman",
                    "Times",
                    "serif",
                ],
            },
        },
    },
    plugins: [require("tailwindcss-debug-screens")],
};
