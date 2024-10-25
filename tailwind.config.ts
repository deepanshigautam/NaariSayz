import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",       // Target files in `app` directory within `src`
    "./src/pages/**/*.{js,ts,jsx,tsx}",      // Optional: if you have `pages` directory
    "./src/components/**/*.{js,ts,jsx,tsx}"  // Optional: if you have `components` directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
