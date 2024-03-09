/** @type {import('tailwindcss').Config} */
export default {
  content: [
	    "./src/**/*.{js,ts,jsx,tsx}",
	    "./index.html"
  ],
  theme: {
    
    extend: {
      screens:{
        'mobile':"767px",
        'tab':"1024px",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors:{
        buttonBg:'#2870EA',
        buttonTxt:'#1B4AEF',
        mainBg:'rgba(239, 242, 245, 1)',
        textLgt:'#5D667B',
        offerBg:'#0052FE',
        headingColor:'#0F1629',
        mainText:'#3E424A'
      }
    },
  },
  plugins: [],
}