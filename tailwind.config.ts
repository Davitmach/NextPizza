import type { Config } from "tailwindcss";

const config: Config = {
 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs':{'max':'893px'}, 
     
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: {
          DEFAULT: 'rgb(255, 105, 0)', 
          text_dark: 'rgb(209, 87, 0)',      
          hover_light:'rgb(255, 210, 179)',
          light:'rgb(255, 240, 230)'
        },
        gray: {
         light:"rgb(153, 153, 153)",
         dark:"rgb(92, 99, 112)",
         bg:'rgb(243, 243, 247)'
        }
    
      },
    },
  },
  plugins: [],
};
export default config;
