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
          base:       '#07090f',
          elevated:   '#0c1018',
          card:       '#0f1520',
          'card-hover': '#131c2a',
        },
        ice: {
          DEFAULT:    '#5cb8e8',
          dim:        '#3a8ec8',
          light:      '#7ecff5',
        },
        surface: {
          border:       '#1a2535',
          'border-light': '#243248',
        },
        frost: {
          DEFAULT: '#e8edf5',
          muted:   '#7a8ea8',
          dim:     '#3d5070',
        },
        status: {
          completed: '#4ade80',
          upcoming:  '#facc15',
          dev:       '#a78bfa',
        },
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.3em',
      },
      backgroundImage: {
        // Northern poster gradients — used on project cards
        'poster-1': 'linear-gradient(145deg, #0a1628 0%, #0d2540 40%, #0e3b5e 100%)',
        'poster-2': 'linear-gradient(145deg, #0f0a20 0%, #1a1040 40%, #0d1e60 100%)',
        'poster-3': 'linear-gradient(145deg, #071520 0%, #0a2535 40%, #073040 100%)',
        'poster-4': 'linear-gradient(145deg, #120a1a 0%, #1e0f38 40%, #2a1050 100%)',
        'poster-5': 'linear-gradient(145deg, #0a1210 0%, #0d2820 40%, #0a3828 100%)',
        'poster-6': 'linear-gradient(145deg, #1a1008 0%, #302010 40%, #1a2820 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDelay: {
        100: '100ms',
        200: '200ms',
        350: '350ms',
        500: '500ms',
      },
    },
  },
  plugins: [],
}
