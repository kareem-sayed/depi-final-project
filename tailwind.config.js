/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1200px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        amiri: ["Amiri", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sand: {
          light: "hsl(40, 50%, 90%)",
          DEFAULT: "hsl(38, 50%, 75%)",
          dark: "hsl(35, 40%, 55%)",
        },
        gold: {
          light: "hsl(45, 70%, 70%)",
          DEFAULT: "hsl(38, 60%, 55%)",
          dark: "hsl(35, 55%, 40%)",
        },
        forest: {
          light: "hsl(153, 35%, 40%)",
          DEFAULT: "hsl(153, 40%, 25%)",
          dark: "hsl(153, 45%, 15%)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "hero-overlay": "var(--hero-overlay)",
        "cta-gradient": "var(--cta-gradient)",
        "sand-gradient": "linear-gradient(135deg, hsl(38, 50%, 85%), hsl(40, 33%, 95%))",
        "gold-gradient": "linear-gradient(135deg, hsl(38, 60%, 55%), hsl(45, 70%, 70%))",
        "forest-gradient": "linear-gradient(135deg, hsl(153, 40%, 25%), hsl(153, 45%, 15%))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        card: "16px",
      },
      boxShadow: {
        soft: "0 2px 15px -3px hsla(150, 30%, 15%, 0.07), 0 10px 20px -2px hsla(150, 30%, 15%, 0.04)",
        "gold-glow": "0 0 30px hsla(38, 60%, 55%, 0.3)",
        "card-hover": "0 10px 40px -10px hsla(153, 40%, 25%, 0.2)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
