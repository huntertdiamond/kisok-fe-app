import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        feedBg: "#f4f4f4",
        kioskTextSecondary: "#888888",
        kioskLayerTwo: "#eeeeee",

        kioskBlue: {
          "50": "#eff3ff",
          "100": "#dbe3fe",
          "200": "#bfcefe",
          "300": "#92aefe",
          "400": "#5f84fb",
          "500": "#3b5bf7",
          "600": "#2439ec",
          "700": "#1c26d9",
          "800": "#1d21b0",
          "900": "#1d238b",
          "950": "#171854",
        },
        kioskYellow: {
          "50": "#fefde8",
          "100": "#fffcc2",
          "200": "#fff787",
          "300": "#ffea43",
          "400": "#ffd914",
          "500": "#efbf03",
          "600": "#ce9400",
          "700": "#a46904",
          "800": "#88520b",
          "900": "#734310",
          "950": "#432205",
        },

        kioskFuschia: {
          "50": "#fcf3ff",
          "100": "#f9e7ff",
          "200": "#f2ceff",
          "300": "#eca7ff",
          "400": "#dc57ff",
          "500": "#d13ef7",
          "600": "#b81edb",
          "700": "#9c15b6",
          "800": "#811395",
          "900": "#6d1679",
          "950": "#470151",
        },

        kioskPurple: {
          "50": "#f6f4fe",
          "100": "#eeebfc",
          "200": "#dfd9fb",
          "300": "#c8bbf7",
          "400": "#ac94f1",
          "500": "#9268ea",
          "600": "#7c40dd",
          "700": "#7236cb",
          "800": "#602daa",
          "900": "#4f278b",
          "950": "#31175e",
        },

        kioskGreen: {
          "50": "#f0fdf3",
          "100": "#dbfde4",
          "200": "#b9f9cb",
          "300": "#CEF2D8",
          "400": "#46e273",
          "500": "#21CB59",
          "600": "#12a73e",
          "700": "#128333",
          "800": "#14672d",
          "900": "#125528",
          "950": "#042f13",
        },
        kioskBlueSecondary: {
          "50": "#eff9ff",
          "100": "#dff2ff",
          "200": "#b8e7ff",
          "300": "#78d6ff",
          "400": "#35c2ff",
          "500": "#06a9f1",
          "600": "#0087ce",
          "700": "#006ca7",
          "800": "#025b8a",
          "900": "#084c72",
          "950": "#062f4b",
        },
        kioskRed: {
          "50": "#fef2f2",
          "100": "#ffe1e1",
          "200": "#ffc8c8",
          "300": "#ffa1a1",
          "400": "#fd6c6c",
          "500": "#f63f3f",
          "600": "#e31f1f",
          "700": "#bf1616",
          "800": "#9e1616",
          "900": "#831919",
          "950": "#470808",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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

        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
      boxShadow: {
        twitter:
          "0 1px 1px rgba(0, 0, 0, 0.06), 0 3px 3px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.06), 0 12px 12px rgba(0, 0, 0, 0.01), 0 24px 24px rgba(0, 0, 0, 0.01)",

        "twitter-light":
          "0 1px 1px rgba(0, 0, 0, 0.03), 0 3px 3px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.03), 0 12px 12px rgba(0, 0, 0, 0.01), 0 24px 24px rgba(0, 0, 0, 0.01)",
        buttonTexture:
          "0px 0px 0px 1px rgba(18,55,105,.08), 0px 1px 2px 0px rgba(164,172,185,.24), 0px -1px 1px 0px rgba(18,55,105,.06) inset",
        buttonTextureHover:
          "0px 0px 0px 1px rgba(18,55,105,.08), 0px 1px 2px 0px rgba(164,172,185,.41), 0px -1px 1px 0px rgba(18,55,105,.1) inset",
        heavyShadow:
          "0 0 0 1px rgba(0,0,0,.08), 0px 1px 1px rgba(0,0,0,.02), 0px 4px 8px -4px rgba(0,0,0,.04), 0px 16px 24px -8px rgba(0,0,0,.06)",

        fancyCardShadow:
          "0 0 0 1px #dbe3fe, 0px 1px 1px rgba(0,0,0,.02), 0px 4px 8px -4px rgba(0,0,0,.04), 0px 16px 24px -8px rgba(0,0,0,.06)",
        shFSNoBorder:
          "0px 1px 1px rgba(0,0,0,.02),0px 8px 16px -4px rgba(0,0,0,.04),0px 24px 32px -8px rgba(0,0,0,.06)",
        shFs: "0 0 0 1px rgba(0,0,0,.08), 0px 1px 1px rgba(0,0,0,.02),0px 8px 16px -4px rgba(0,0,0,.04),0px 24px 32px -8px rgba(0,0,0,.06)",
        lightInner: "inset 0 1px 1px rgba(255, 255, 255, 0.4)",
        calmShadow:
          "0px 0px 0px 1px #0E3F7E08, 0px 1px 1px -0.5px #2A334508, 0px 3px 3px -1.5px #2A334608, 0px 6px 6px -3px #2A334608, 0px 12px 12px -6px #0E3F7E08, 0px 24px 24px -12px #0E3F7E10",
        buttonShadow: `inset 0 -2px 0 0 #f6f6f6, 0 2px 6px -2px #d4d4d4, 0 0 0 1px #eaedf0`,
        buttonShadowTwo:
          "0px 0px 1px 1px rgba(255, 255, 255, 0.08), inset 0px 1px 1.5px 0px rgba(0, 0, 0, 0.32), 0px 0px 0px 0.2px #1a94ff",
        toothpasteButton:
          "inset 0 -1px 1px 1px #0DA88A, 0 2px 2px -1px #d4d4d4",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
      },
      fontFamily: {
        "abc-diatype": ["ABCDiatypeRounded", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
