/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
      },
      fontFamily: {
        header: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
