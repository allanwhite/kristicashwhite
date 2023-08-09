const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            'sans': ['Clarika', 'ui-sans-serif', 'system-ui'],
            'serif': ['Sentinel', 'ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': ['Clarika'],
            'body': ['Sentinel'],
        },
        extend: {},
    },
    plugins: [],
};
// 'sans': ['"Public Sans Variable"', 'sans-serif'],
// 'serif': ['"Playfair Display Variable"', 'serif'],
