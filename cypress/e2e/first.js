const { Given, When, And, Then } = require('@badeball/cypress-cucumber-preprocessor');


Given('User opens main page', () => {
    cy.visit('https://www.google.com/');
})
Given('Type "Google"', () => {
    cy.xpath('//*[@class="gLFyf gsfi"]').type('Google');
})
