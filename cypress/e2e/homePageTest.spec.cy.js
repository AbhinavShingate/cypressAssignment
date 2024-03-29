const homePage = require('../objects/homePage.obj')

describe('Home Page', () => {
  it('verify mitigram logo and mitigram title displayed', () => {
    cy.visit('https://www.mitigram.com/')
    cy.get(homePage.mitigramLogo).should('be.visible')
    cy.get(homePage.mitigramTitle).should('be.visible').and('have.text', '\n\t\tTrade finance.Made seamless.\n\t')
  })
})