/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ["Roboto Flex", "sans-serif"],
			},
			colur: {
				primary: "#000000",
				secondary: "#000000",
				tertiary: "#000000",
			},
		},
	},
	plugins: [],
};
