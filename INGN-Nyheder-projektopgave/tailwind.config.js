/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		// screens: {
		// 	laptop: "1024",
		// },
		extend: {
			colors: {
				primary: "#F6F3F3",
				secondary: "#FFFFFF",
				black: "#000000",
				text: "#242424",
				red: "#C52525",
			},
			fontFamily: {
				Roboto: ["Roboto Flex", "sans-serif"],
			},
		},
	},
	plugins: [],
};
