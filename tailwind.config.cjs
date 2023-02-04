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
                "serif-pro": ["Source Serif Pro", "Georgia", "Cambria"],
            },
        },
    },
    plugins: [require("tailwindcss-debug-screens")],
};
