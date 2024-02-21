const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    app_base_url: "http://localhost:3002/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
