/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#F6F3F3",
				secondary: "#FFFFFF",
				black: "#000000",
				red: "#C52525",
			},
			fontFamily: {
				Roboto: ["Roboto Flex", "sans-serif"],
			},
		},
	},
	plugins: [],
};
