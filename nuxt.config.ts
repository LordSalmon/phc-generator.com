// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        [
            "@nuxtjs/eslint-module",
            {
                /* module options */
                lintOnStart: true,
                emitError: true,
                emitWarning: true,
                failOnError: false,
                failOnWarning: false,
            },
        ],
        [
            "@nuxtjs/tailwindcss",
            {
                configPath: "tailwind.config.js",
                exposeConfig: true,
                injectPosition: "first",
                viewer: true,
            },
        ],
        [
            "@nuxtjs/plausible",
            {
                domain: "phc-generator.com",
                apiHost: "https://analytics.schwedes-solutions.ch",
                trackLocalhost: true,
            },
        ],
        "nuxt-headlessui",
        "@vueuse/nuxt",
        "nuxt-icon",
    ],
    headlessui: {
        prefix: "",
    },
});
