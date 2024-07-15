/** @type {import('tailwindcss').Config} */
const nativewind = require('nativewind/tailwind/native');

module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./src/screens/**/*.{ts,tsx}',
		'./src/components/**/*.{ts,tsx}',
	],
	theme: {
		extend: {},
		// colors: {
		// 	main: '#00F0A1',
		// 	white: '#ffffff',
		// 	gray: '#72787F',
		// },
		fontSize: {
			tiny: 5,
			sm: 8,
			md: 12,
			lg: 14,
			base: 16,
			xl: 20,
			'2xl': 25,
			'3xl': 31,
			'4xl': 39,
			'5xl': 49,
		},
	},
	plugins: [nativewind()],
};
