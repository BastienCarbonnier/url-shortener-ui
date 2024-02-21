const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    app_base_url: "https://urlshortener-ui-1c6938ccabc0.herokuapp.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
