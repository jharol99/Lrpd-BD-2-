module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Burgundy
        primary: {
          DEFAULT: "#8B2635", // burgundy-600
          50: "#FDF2F4", // burgundy-50
          100: "#FCE7EA", // burgundy-100
          200: "#F9CFD5", // burgundy-200
          300: "#F5A8B4", // burgundy-300
          400: "#EF7085", // burgundy-400
          500: "#E53E56", // burgundy-500
          600: "#8B2635", // burgundy-600
          700: "#721E2B", // burgundy-700
          800: "#5A1822", // burgundy-800
          900: "#4A141C", // burgundy-900
        },
        // Secondary Colors - Golden Amber
        secondary: {
          DEFAULT: "#D4A574", // amber-400
          50: "#FDF9F3", // amber-50
          100: "#FBF2E7", // amber-100
          200: "#F7E5CF", // amber-200
          300: "#F1D1A3", // amber-300
          400: "#D4A574", // amber-400
          500: "#C89A5E", // amber-500
          600: "#B8864A", // amber-600
          700: "#9A6F3A", // amber-700
          800: "#7D5A2F", // amber-800
          900: "#664A26", // amber-900
        },
        // Accent Colors - Sage Green
        accent: {
          DEFAULT: "#7A8471", // sage-500
          50: "#F6F7F5", // sage-50
          100: "#EDEEED", // sage-100
          200: "#DBDDDA", // sage-200
          300: "#BCC0B8", // sage-300
          400: "#9BA295", // sage-400
          500: "#7A8471", // sage-500
          600: "#6B7362", // sage-600
          700: "#5A6153", // sage-700
          800: "#4A5044", // sage-800
          900: "#3D4238", // sage-900
        },
        // Background Colors
        background: "#FEFCF8", // cream-50
        surface: "#F5F2ED", // cream-100
        // Text Colors
        text: {
          primary: "#2C2C2C", // charcoal-800
          secondary: "#6B6B6B", // gray-500
        },
        // State Colors
        success: "#5D7C47", // sage-700
        warning: "#B8860B", // gold-600
        error: "#A0424D", // burgundy-400
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'vineyard': '0 4px 6px -1px rgba(139, 38, 53, 0.08), 0 2px 4px -1px rgba(139, 38, 53, 0.04)',
        'vineyard-lg': '0 10px 15px -3px rgba(139, 38, 53, 0.08), 0 4px 6px -2px rgba(139, 38, 53, 0.04)',
        'vineyard-xl': '0 20px 25px -5px rgba(139, 38, 53, 0.08), 0 10px 10px -5px rgba(139, 38, 53, 0.04)',
      },
      animation: {
        'gentle-float': 'gentleFloat 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      backdropBlur: {
        'vineyard': '8px',
      },
      borderRadius: {
        'vineyard': '12px',
        'vineyard-lg': '16px',
      },
    },
  },
  plugins: [],
}
