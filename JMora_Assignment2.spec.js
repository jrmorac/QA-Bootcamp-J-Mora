
/// <reference types="cypress" />

describe('Real World App Tests', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/signin')
    //Log in
    cy.get('#username').type('Katharina_Bernier')
    cy.get('#password').type('s3cret')
    cy.get('.MuiButton-label').click()
  })

  //it('Log in and Log out', () => {
    //cy.get('h6[data-test="sidenav-username"]').contains('@Katharina_Bernier')
  //})

  it('Create New Account / Delete Account', () => {
    cy.get('.MuiListItemText-root').contains('Bank Accounts').click()
    cy.get('.MuiButton-label').contains('Create').click()
    cy.get('#bankaccount-bankName-input').type('Jose Mora Casal')
    cy.get('#bankaccount-routingNumber-input').type(555555555)
    cy.get('#bankaccount-accountNumber-input').type(123456789)
    cy.get('button[data-test="bankaccount-submit"]').click()
    cy.get('li[data-test*="bankaccount-list-item-"]').contains('Jose Mora Casal').should('be.visible')
    cy.get('.MuiButton-label').eq(3).click()
    cy.get('li[data-test*="bankaccount-list-item-"]').contains('Jose Mora Casal (Deleted').should('be.visible')
  })

  after(()=> {
    //Log out
    cy.get('div[data-test="sidenav-signout"]').click()
  })
})