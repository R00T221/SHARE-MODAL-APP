/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    /* in extend we here used the self-defined/external color and fonts */
    extend: {
       colors:{},
      fontFamily: {
      mulish: ["Mulish", "sans-serif"],
      customo: [
        'Trebuchet MS',
        'Lucida Sans Unicode',
        'Lucida Grande',
        'Lucida Sans',
        'Arial',
        'sans-serif',
      ],
    },
    
    keyframes: {
      animato:{
        '50%': {left: '24%',top:'4%',scale:'1.1',boxShadow:'0px 0px 37px #d84869'},
      },
      circle2:{
        '50%':{bottom:'1%',right:'20%'},
      }
    },
    animation: {
      move:'animato 15s  infinite',
      circlee:'circle2 8s infinite',
    }, //animation ends

    backgroundImage:{
      gradiento:"linear-gradient(-25deg, #5648d8, #8641f4)",
    },

    //custom media queries
    screens: {
      'lowEnd': {'max': '400px'},
      

      'midEnd': {'max': '850px'},
     
    },

  
  }, //extend ends
  },
  plugins: [],
}
