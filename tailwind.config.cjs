/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
        black: 'hsl(var(--black))',
        content: 'hsl(var(--content))',
        'light-sand': 'hsl(var(--light-sand))',
        'dark-sand': 'hsl(var(--dark-sand))',
        'dark-ocean': 'hsl(var(--dark-ocean))',
        'light-ocean': 'hsl(var(--light-ocean))',
        'rhyze-red': 'hsl(var(--rhyze-red))',
        'dark-wet-sand': 'hsl(var(--dark-wet-sand))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        synthwave: {
          ...require('daisyui/src/theming/themes')['[data-theme=bumblebee]'],
          primary: 'var(--primary)',
          'primary-focus': 'var(--primary-focus)',
          secondary: 'var(--secondary)',
          accent: 'var(--accent)',
          neutral: 'var(--black)',
          '--p': 'var(--primary)',
          '--pf': 'var(--primary-focus)',
          '--s': 'var(--secondary)',
          '--a': 'var(--accent)',
          '--n': 'var(--black)',
          '--rounded-btn': 'var(--border-radius)',
          '--rounded-box': 'var(--border-radius)',
          '--tab-radius': '0',
        },
      },
    ],
  },
};
