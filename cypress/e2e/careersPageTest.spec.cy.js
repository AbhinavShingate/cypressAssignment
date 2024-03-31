const careersPage = require('../objects/careersPage.obj')
const url = require('../fixtures/urls.json')

describe('Careers Page', () => {
  it('verify mitigram logo,careers page title and description is displayed', () => {
    cy.visit(url.careersPageURL)
    cy.get(careersPage.mitigramLogo).should('be.visible')
    cy.get(careersPage.careersPageTitle).should('be.visible').and('have.text', 'Make Mitigram your next move')
    cy.get(careersPage.careersPageDescription).should('be.visible').and('have.text','Mitigram is one of the most exciting FinTech companies in Europe. '
    + 'Our strong growth, combined with a client list of the world\'s leading corporates and banks, '
    + 'means we can offer exciting opportunities for anyone who joins us at this stage.')
    cy.get(careersPage.openPositionButton).should('be.visible').and('have.text', 'Open positions').and('have.attr', 'href').and('include', '#open-positions')
  })

  it('verify all the header elements on careers page are displayed', () => {
    cy.visit(url.careersPageURL)
    cy.get(careersPage.mitigramLogo).should('be.visible')
    cy.get(careersPage.solutionsOption).should('be.visible').and('have.text', 'Solutions')
    cy.get(careersPage.whyMitigramOption).should('be.visible').and('have.text', 'Why Mitigram')
    cy.get(careersPage.resourcesOption).should('be.visible').and('have.text', 'Resources')
    cy.get(careersPage.aboutUsOption).should('be.visible').and('have.text', 'About us')
    cy.get(careersPage.requestADemoButton).should('be.visible').and('have.text', 'Request a demo')
    cy.get(careersPage.logInButton).should('be.visible').and('have.text', 'Log in')
  })

  it('verify after clicking on open positions it redirects to all open positions and verify first job position', () => {
    cy.visit(url.careersPageURL)
    cy.get(careersPage.mitigramLogo).should('be.visible')
    cy.get(careersPage.openPositionButton).click()
    cy.get(careersPage.allOption).should('be.visible').and('have.text', 'All')
    cy.get(careersPage.biAnalystPost).should('be.visible').and('have.text', 'BI Analyst')
    cy.get(careersPage.biAnalystPost).click()
    cy.get(careersPage.biAnalystPostDescription).should('be.visible').and('have.text', 'We are looking for a BI Analyst to join the Mitigram team '
    + 'in their ambitious endeavour to shape the future of financing global trade. ')
    cy.get(careersPage.learnMoreButtonForBIAnalyst).should('be.visible').and('have.text', 'Learn more')
    .and('have.attr', 'href').and('include', '/ads/BI-Analyst.pdf')
    cy.get(careersPage.applyForPositionButtonForBIAnalyst).should('be.visible').and('have.text', 'Apply for this position')
    .and('have.attr', 'href').and('include', '/contact')
  })
})