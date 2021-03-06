/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  const newConfig = {
    ...config,
    env: {
      API_HOST: process.env.REACT_APP_API_HOST,
      PUBLIC_TAG_ID: process.env.REACT_APP_PUBLIC_TAG_ID,
      HIDDEN_TAG_ID: process.env.REACT_APP_HIDDEN_ITEM_TAG_ID,
      AUTHENTICATION_HOST: process.env.REACT_APP_AUTHENTICATION_HOST,
    },
  };
  require('@cypress/code-coverage/task')(on, newConfig);
  return newConfig;
};
