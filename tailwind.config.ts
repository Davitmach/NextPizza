import type { Config } from "tailwindcss";

const config: Config = {
 
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs':{'max':'893px'}, 
     
    },
    extend: {
      borderRadius: {
        'custom': '15px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: {
          DEFAULT: '#FE5F00', 
          addBtnBg:'rgba(255, 250, 244, 1)'
        },
        white:{
border:'rgba(239, 239, 239, 1)',
DEFAULT:'rgba(255, 255, 255, 1)',
hover:'rgba(255, 250, 246, 1)',
category:'rgba(250, 250, 250, 1)',
cart:'rgba(244, 241, 238, 1)'
        },
        gray: {
         dark:'#888888',
         dark2:'#B1B1B1',
         dark3:'#ADADAD',
         dark4:'#7B7B7B',
         dark5:'#ECECEC',
         light:'#BBBBBB',
         light2:'#F6F6F6',
         light3:'#EDEDED',
         light4:'#C0C0C0',
         background:'rgba(0, 0, 0, 0.6)',
         price:'rgba(133, 133, 133, 1)',
         priceInputBorder:'rgba(246, 246, 246, 1)',
         notFoundDescription:'rgba(153, 153, 153, 1)',
         xmark:'rgba(80, 80, 80, 1)',
         description:'rgba(161, 161, 161, 1)',
         cartBorder:'rgba(237, 237, 237, 1)',
         dotted:'rgba(223, 223, 223, 1)',
         toggleBg:'rgba(236, 236, 236, 1)',
         productInfo:'rgba(119, 119, 119, 1)'
        },
        black:{
          link:'rgba(32, 32, 32, 1)',
          label:'rgba(0, 0, 0, 1)',
          modalBg:'rgba(0, 0, 0, 0.6)'
        },
        red:{
          error_message:'rgba(254, 0, 0, 1)'
        }
    
      },
    },
  },
  plugins: [],
};
export default config;
