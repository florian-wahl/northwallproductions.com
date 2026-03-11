/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base:         '#f8f8f8',
          elevated:     '#f0f0f0',
          card:         '#ffffff',
          'card-hover': '#f4f4f4',
        },
        ink: {
          DEFAULT: '#111111',
          muted:   '#555555',
          dim:     '#666666',
          ghost:   '#999999',
        },
        edge: {
          DEFAULT: '#e0e0e0',
          light:   '#eeeeee',
          strong:  '#b0b0b0',
        },
        status: {
          completed: '#111111',
          upcoming:  '#555555',
          dev:       '#333333',
        },
      },
      fontFamily: {
        sans:    ['Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        body:    ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'poster-1': 'linear-gradient(165deg, #d8d8d8 0%, #686868 40%, #0a0a0a 100%)',
        'poster-2': 'linear-gradient(165deg, #e4e4e4 0%, #848484 40%, #1c1c1c 100%)',
        'poster-3': 'linear-gradient(165deg, #cccccc 0%, #505050 40%, #080808 100%)',
        'poster-4': 'linear-gradient(165deg, #dcdcdc 0%, #747474 40%, #141414 100%)',
        'poster-5': 'linear-gradient(165deg, #c4c4c4 0%, #404040 40%, #060606 100%)',
        'poster-6': 'linear-gradient(165deg, #ececec 0%, #9c9c9c 40%, #2c2c2c 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
