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
			light: {
				gray: {
					100: '#FCFCFC',
					200: '#F8F9F9',
					300: '#E9ECEF',
					400: '#C9CCD1',
					500: '#9EA4AA',
					600: '#72787F',
					700: '#454C53',
				},
				'dark-gray': {
					800: '#26282B',
					900: '#1D2002',
				},
				green: {
					100: '#FBFFF5',
					200: '#F2FFE0',
					300: '#E3FCBF',
					400: '#CBFAC4',
					500: '#B8F1B0',
					600: '#84DE77',
					700: '#00F0A1',
					800: '#14C38E',
				},
				common: {
					white: '#ffffff',
					black: '#111111',
				},
				red: {
					900: '#FF3E3E',
				},
				yellow: {
					900: '#FFB800',
				},
			},
			dark: {
				gray: {
					100: '#1A1A1A',
					200: '#2E2E2E',
					300: '#424242',
					400: '#5A5A5A',
					500: '#737373',
					600: '#8C8C8C',
					700: '#A5A5A5',
				},
				'dark-gray': {
					800: '#B3B3B3',
					900: '#CCCCCC',
				},
				green: {
					100: '#1A3C1A',
					200: '#2A522A',
					300: '#3A693A',
					400: '#4A804A',
					500: '#5A995A',
					600: '#6AB26A',
					700: '#7ACB7A',
					800: '#8AE48A',
				},
				bg: {
					white: '#1A1A1A',
					black: '#E6E6E6',
				},
				red: {
					900: '#CC0000',
				},
				yellow: {
					900: '#CC9900',
				},
			},
			sns: {
				kakao: '#FEE500',
				google: '#FEE500',
				naver: '#2DB400',
			},
			main: '#00F0A1',
		},
		fontSize: {
			tiny: 5,
			sm: 8,
			md: 12,
			base: 14,
			lg: 16,
			xl: 20,
			'2xl': 24,
			'3xl': 30,
			'4xl': 36,
			'5xl': 48,
			'6xl': 60,
			'7xl': 72,
			'8xl': 96,
			'9xl': 128,
		},
	},
	plugins: [nativewind()],
};
