/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ["'Source Sans 3', sans-serif"]
		},
		extend: {
			colors: {
				simple: {
					light: '#18DA66',
					dark: '#2C9347'
				}
			}
		}
	},
	plugins: []
};
