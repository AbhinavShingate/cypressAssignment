const loginPage = require('../objects/loginPage.obj')
const forgotPasswordPage = require('../objects/forgotPasswordPage.obj')
const url = require('../fixtures/urls.json')

describe('Login Page', () => {
  it('verify on the login page all ui elements are visible and have expected texts', () => {
    cy.visit(url.loginPageURL)
    cy.get(loginPage.mitigramLogo).should('be.visible')
    cy.get(loginPage.emailField).should('be.visible')
    cy.get(loginPage.passwordField).should('be.visible')
    cy.get(loginPage.LoginButton).should('be.visible')
    cy.get(loginPage.forgotPasswordLink).should('be.visible').and('have.text', 'Forgot your password?')
    .and('have.attr', 'href').and('include', '/Account/ForgotPassword')
    cy.get(loginPage.appStoreLink).should('be.visible').and('have.attr', 'href')
    .and('include', 'https://apps.apple.com/app/mitigram/id1453993945')
    cy.get(loginPage.playStoreLink).should('be.visible').and('have.attr', 'href')
    .and('include', 'https://play.google.com/store/apps/details?id=com.mitigram.marketplace')
    cy.get(loginPage.wouldYouLikeText).should('be.visible').contains('Would you like to create an account?')
    cy.get(loginPage.contactUsLink).should('be.visible').and('have.attr', 'href')
    .and('include', 'https://mitigram.com/#contact')
    cy.get(loginPage.cookiesText).should('be.visible').contains('We use cookies to give you the best experience on our site.'
    + 'Cookies are files stored in your browser and are used by most websites to help personalise visitors web experience.'
    + 'By logging in, you are accepting cookies on mitigram.com.')
  })

  it('verify after clicking on forgot password link redirects to forgot password page', () => {
    cy.visit(url.loginPageURL)
    cy.get(loginPage.mitigramLogo).should('be.visible')
    cy.get(loginPage.forgotPasswordLink).click()
    cy.get(forgotPasswordPage.forgotPasswordTitle).should('be.visible').and('have.text','Forgot your password?')
  })
})