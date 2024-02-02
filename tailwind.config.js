/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '15px',
		},

		extend: {
			fontFamily: {
				cabin: ['Cabin', 'sans-serif'],
			},
			colors: {
				'primary-text': '#3f3d56',
				primary: '#6c63ff',
				'primary-light': '#756dff',
				secondary: '#fa8916',
				'secondary-light': '#ffa21a',
				'secondary-dark': '#e65100',
				neutral: '#05adc1',
				lightgray: '#77838f',
				'primary-border': '#c5c8d5',
				'link-color': '#b3b3b3',
				'offer-color': '#0078D6',
			},
			boxShadow: {
				small: '0px 8px 15px rgba(108,99,255,0.4)',
				button:
					'0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12)',
				faq: '0px 8px 15px rgba(140, 152, 164, 0.1)',
				light: '0px 8px 15px rgba(140, 152, 164, 0.1)',
			},

			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: 'fade-in .3s ease',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
