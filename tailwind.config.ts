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
      's':{'max':'593px'}, 
      'l':{'max':'1125px'}, 
      'lMin':{'min':'1126px'}, 
      'xxs':{'max':'437px'}, 
      '1360max':{'max':'1360px'}, 
      '1133max':{'max':'1133px'}, 
      '571max':{'max':'571px'},
      '1073max':{'max':'1073px'},
      '937max':{'max':'937px'},
      '653max':{'max':'653px'},
      '1392max':{'max':'1392px'},
      '813max':{'max':'813px'}
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
          addBtnBg:'rgba(255, 250, 244, 1)',
          hover:'rgba(255, 250, 246, 1)'
        },
        white:{
border:'rgba(239, 239, 239, 1)',
DEFAULT:'rgba(255, 255, 255, 1)',
hover:'rgba(255, 250, 246, 1)',
category:'rgba(250, 250, 250, 1)',
cart:'rgba(244, 241, 238, 1)',
productCart:'rgba(255, 247, 238, 1)',
checkOutBg:'rgba(244, 241, 238, 1)',
checkOutBorder:'rgba(222, 222, 222, 1)'
        },
        gray: {
          orderDate:'rgba(174, 174, 174, 1)',
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
         productInfo:'rgba(119, 119, 119, 1)',
         productCartDescription:'rgba(177, 177, 177, 1)',
         loginDescription:'rgba(124, 124, 124, 1)'
        },
        black:{
          link:'rgba(32, 32, 32, 1)',
          label:'rgba(0, 0, 0, 1)',
          modalBg:'rgba(0, 0, 0, 0.6)',
          breadScrumbs:'rgba(55, 55, 55, 1)',
          breadTransparent:'rgba(55, 55, 55, 0.6)'
        },
        red:{
          error_message:'rgba(254, 0, 0, 1)',
          bg:'rgba(255, 240, 239, 1)',
          text:'rgba(255, 84, 74, 1)'
        },
        green:{
          bg:'rgba(234, 248, 244, 1)',
          text:'rgba(27, 180, 134, 1)'
        },
        yellow:{
          bg:'rgba(255, 243, 180, 1)',
          text:'rgba(145, 124, 18, 1)'
        }
    
      },
    },
  },
  plugins: [],
};
export default config;
