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
		colors: {
			main: '#00F0A1',
		},
	},
	plugins: [nativewind()],
};
