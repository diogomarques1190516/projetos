import { defineConfig } from "cypress";
const { GoogleSocialLogin } = require('cypress-social-logins').plugins
/**
* @type {Cypress.PluginConfig}
*/
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        GoogleSocialLogin: GoogleSocialLogin
        })
      // implement node event listeners here
    },
  },
});
