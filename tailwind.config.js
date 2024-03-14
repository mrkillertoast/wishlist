// tailwind.config.js
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}", // Add this line if you use Tailwind in your Nuxt config
    ],
    daisyui: {
        themes: ["light", "night"]
    },
    theme: {
        // ... your customizations
    },
    plugins: [ require( "@tailwindcss/typography"),require("daisyui")],
};