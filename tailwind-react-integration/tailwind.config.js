// tailwind.config.js
module.exports = {
  // In Tailwind CSS v3.x, the `purge` option is replaced by `content`.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  // You can optionally configure `darkMode` here if needed (media or class-based).
  darkMode: 'class', // or 'media', or remove entirely if not needed.

  // Extend Tailwind’s default theme here if you want custom styles.
  theme: {
    extend: {},
  },

  // `variants` is no longer needed in Tailwind v3.x, as all variants are enabled by default.
  plugins: [], // If you want to use Tailwind plugins, add them here.
};
