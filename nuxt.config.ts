export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon-tw'],
    tailwindcss: {
        cssPath: ["~/assets/css/main.css", {injectPosition: "first"}],
        configPath: 'tailwind.config.js',
        config: {},
        injectPosition: 'first',
        viewer: true,
    }
});