const homePage = require('../objects/homePage.obj')
const loginPage = require('../objects/loginPage.obj')
const careersPage = require('../objects/careersPage.obj')
const url = require('../fixtures/urls.json')

describe('Home Page', () => {
  it('verify mitigram logo and mitigram title displayed', () => {
    cy.visit(url.homePageURL)
    cy.get(homePage.mitigramLogo).should('be.visible')
    cy.get(homePage.mitigramTitle).should('be.visible').and('have.text', '\n\t\tTrade finance.Made seamless.\n\t')
  })

  it('verify Login button has correct url', () => {
    cy.visit(url.homePageURL)
    cy.get(homePage.mitigramLogo).should('be.visible')
    cy.get(homePage.LoginButton).should('be.visible').and('have.attr', 'href').and('include', 'https://marketplace.mitigram.com/Account/Login?ReturnUrl=%2F')
  })

  it('verify after clicking on Login button redirects to login page', () => {
    cy.visit(url.homePageURL)
    cy.get(homePage.mitigramLogo).should('be.visible')
    cy.get(homePage.LoginButton).click() 
    cy.get(loginPage.mitigramLogo).should('be.visible')
    cy.get(loginPage.emailField).should('be.visible')
  })

  it('verify after clicking on Careers link redirects to careers page', () => {
    cy.visit(url.homePageURL)
    cy.get(homePage.mitigramLogo).should('be.visible')
    cy.get(homePage.careersLink).click() 
    cy.get(careersPage.careersPageTitle).should('be.visible')
  })
})