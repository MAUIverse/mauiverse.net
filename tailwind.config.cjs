/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: 'rgb(var(--color-brand-light) / <alpha-value>)',
          dark: 'rgb(var(--color-brand-dark) / <alpha-value>)',
          extra: 'rgb(var(--color-brand-extra) / <alpha-value>)',
          extraDark: 'rgb(var(--color-brand-extraDark) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-brand) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          alt: 'rgb(var(--color-surface-alt) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--color-muted) / <alpha-value>)',
          light: 'rgb(var(--color-muted-light) / <alpha-value>)',
        },
        edge: 'rgb(var(--color-edge) / <alpha-value>)',
      },
      fontFamily: {
        header: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
