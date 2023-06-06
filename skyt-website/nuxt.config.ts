// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
        css: ['~/dist/output.css'],
        app: {
            pageTransition: {name: 'page', mode: 'out-in'},
        },
    })
