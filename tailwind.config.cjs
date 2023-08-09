const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['"Public Sans Variable"', 'sans-serif'],
			'serif': ['"Playfair Display Variable"', 'serif'],
		},
		extend: {},
	},
	plugins: [],
};
