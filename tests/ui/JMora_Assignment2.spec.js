
/// <reference types="cypress" />

describe('Real World App Account Tests', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/signin')
    //Log in
    cy.get('#username').type('Katharina_Bernier')
    cy.get('#password').type('s3cret')
    cy.get('.MuiButton-label').click()
  });

  it('Should Create New Account', () => {
    cy.get('.MuiListItemText-root').contains('Bank Accounts').click()
    cy.get('.MuiButton-label').contains('Create').click()
    cy.get('#bankaccount-bankName-input').type('Jose Mora Casal')
    cy.get('#bankaccount-routingNumber-input').type(555555555)
    cy.get('#bankaccount-accountNumber-input').type(123456789)
    cy.get('button[data-test="bankaccount-submit"]').click()
    cy.get('li[data-test*="bankaccount-list-item-"]').contains('Jose Mora Casal').should('be.visible')
  });

  it('Should Delete Account', () => {  
    cy.get('.MuiButton-label').eq(3).click()
    cy.get('li[data-test*="bankaccount-list-item-"]').contains('Jose Mora Casal (Deleted').should('be.visible')
  });

  after(()=> {
    //Log out
    cy.get('div[data-test="sidenav-signout"]').click()
  });
});
