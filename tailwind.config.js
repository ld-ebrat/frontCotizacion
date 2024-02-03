/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'ebrat': {
        white: "#ffffff",
        black: "#000000",
        transparente: 'transparent',
        gray: "#EAEAEA",
        100: '#190482',
        120: "#001B79",
        150: "#1640D6",
        160: "#712ac6",
        200: '#7752FE',
        250: '#8E8FFA',
        300: '#C2D9FF',
        305: "rgba(255, 255, 255, 0.6)",
        306: "rgba(255, 255, 255, 0.5)",
        310: "rgba(255, 255, 255, 0.2)",
        320: "rgba(77, 77, 77, 0.5)",
        325: "rgba(77, 77, 77, 0.2)",
        326: "rgba(77, 77, 77, 1)",
        330: "#8D8D8D",
        335: "#121212",
        "err": "#FF4646",
        "success": "#00C109"
      },
      "hunt":{
        1.1:"#F1F1F1",
        1.2:"#FDB827",
        1.3:"#21209C",
        1.4:"#23120B",
        2.1:"#FF5F00",
        2.2:"#B20600",
        2.3:"#00092C",
        2.4:"#EEEEEE",
        3.1:"#0D1282",
        3.2:"#EEEDED",
        3.3:"#F0DE36",
        3.4:"#D71313",
        4.1:"#D2001A",
        4.2:"#FFDE00",
        4.3:"#FFFAE7",
        4.4:"#EFEFEF",
        5.1:"#F2F4FB",
        5.2:"#FF9280",
        5.3:"#FF2400",
        5.4:"#45315D",
      }
    },
    extend: {
      boxShadow: {
        'e' : '0px 0px 20px 10px #ffffff',
        "f" : "0px 0px 0px 0.2px #ffffff",
        'g' : '0px 0px 10px 1px #ffffff',
      },
      width:{
        "5/11": "45%"
      },
      borderWidth :{
        "1111":"0.1px"
      }
    },
  },
  plugins: [],
}

