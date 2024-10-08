module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [require("@tailwindcss/typography"), require('daisyui'),require('@tailwindcss/line-clamp')],
    theme: {
        extend: {},
    },
    safelist: [
        {
            pattern: /(.*)-(neutral|primary|secondary|accent|info|success|warning|error|ghost|link|outline|active|disabled|danger)$/
        },
    ],
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset"
        ],
        base: true
    },
};
