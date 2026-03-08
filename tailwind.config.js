/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base:         '#f4f8f9',
          elevated:     '#eaf3f5',
          card:         '#ffffff',
          'card-hover': '#f0f7f9',
        },
        glacier: {
          DEFAULT: '#0b6e7d',
          mid:     '#1a8fa0',
          light:   '#5ab5c4',
          pale:    '#c8e8ed',
          wash:    '#e8f5f7',
        },
        ink: {
          DEFAULT: '#0d1d22',
          muted:   '#3d6070',
          dim:     '#7aa0aa',
          ghost:   '#b8d0d8',
        },
        edge: {
          DEFAULT: '#cde6ec',
          light:   '#e2f1f5',
          strong:  '#a0c8d5',
        },
        status: {
          completed: '#0a6e45',
          upcoming:  '#7a5800',
          dev:       '#5a2a8a',
        },
      },
      fontFamily: {
        sans:    ['Nunito', 'sans-serif'],
        heading: ['Nunito', 'sans-serif'],
        body:    ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'poster-1': 'linear-gradient(160deg, #b8dde4 0%, #3898ad 45%, #0b5e6e 100%)',
        'poster-2': 'linear-gradient(160deg, #b8cce0 0%, #3a6898 45%, #162e58 100%)',
        'poster-3': 'linear-gradient(160deg, #b0dece 0%, #1e8868 45%, #084838 100%)',
        'poster-4': 'linear-gradient(160deg, #d0c4e4 0%, #7040a8 45%, #340a6a 100%)',
        'poster-5': 'linear-gradient(160deg, #b8d8c8 0%, #2a9858 45%, #0a4828 100%)',
        'poster-6': 'linear-gradient(160deg, #c0cede 0%, #405870 45%, #0e1e2e 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.75s ease both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
