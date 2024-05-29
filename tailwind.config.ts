import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [],
} satisfies Config;
