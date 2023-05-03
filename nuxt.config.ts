// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          hid: "my_external_javascript",
          src: "my_external_javascript.js",
        },
      ],
    },
  },
});
