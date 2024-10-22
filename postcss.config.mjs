/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: { config: "./tailwind.config.ts" }, // Pointing to the TypeScript config
    autoprefixer: {}, // Optional but commonly used for cross-browser support
  },
};

export default config;
