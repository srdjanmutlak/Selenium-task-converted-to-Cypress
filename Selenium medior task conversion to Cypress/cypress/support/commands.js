// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Example of Custom Command


Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

Cypress.Commands.add('addNewCandidate', (firstName, lastName, email) => {

    cy.frameLoaded('#noncoreIframe')

    cy.iframe().find('#addCandidate_firstName')
        .click()
        .type(firstName)

    cy.iframe().find('#addCandidate_lastName')
        .click()
        .type(lastName)

    cy.iframe().find('#addCandidate_email')
        .click()
        .type(email)

    cy.iframe().find('#textarea_addCandidate_vacancy')          
        .click()

    cy.iframe().xpath("//p[@competancy-id='44']")          
        .click()
    
    cy.iframe().find('#applied_date')          
        .click()

    cy.iframe().find('.picker__day.picker__day--infocus.picker__day--today.picker__day--selected.picker__day--highlighted')          
        .click()


        cy.fixture('test.pdf').then(fileContent => {
            cy.iframe().find('#addCandidate_resume')
            .click()
            .attachFile({
                fileContent: fileContent.toString(),
                fileName: 'test.pdf',
              //  mimeType: 'pdf'
            });
        });

    cy.iframe().find('#saveCandidateButton')          
        .click()

    })



require('cypress-iframe');

import 'cypress-file-upload';

import '@4tw/cypress-drag-drop'

import "cypress-real-events/support";


