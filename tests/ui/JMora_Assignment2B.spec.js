
/// <reference types="cypress" />

describe('Real World App Account Tests', () => {
  let UUID = '1' + Math.random().toString();
  let accountName = 'Jose Mora Casal' + UUID;
  let routingNumber = '555555555';
  let accountNumber = '123456789';
  let username = 'Katharina_Bernier';
  let password = 's3cret'

  beforeEach(()=> {
    cy.visit('http://localhost:3000/signin')
    //Log in
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.MuiButton-label').click()
  });

  afterEach(()=> {
    //Log out
    cy.get('div[data-test="sidenav-signout"]').click()
  });

  it('Should Create New Account', () => {
    cy.get('.MuiListItemText-root').contains('Bank Accounts').click()
    cy.get('.MuiButton-label').contains('Create').click()
    cy.get('#bankaccount-bankName-input').type(accountName)
    cy.get('#bankaccount-routingNumber-input').type(routingNumber)
    cy.get('#bankaccount-accountNumber-input').type(accountNumber)
    cy.get('button[data-test="bankaccount-submit"]').click()
    cy.get('li[data-test*="bankaccount-list-item-"]').contains(accountName).should('be.visible')
  });

  it('Should Delete Account', () => {  
    cy.get('.MuiListItemText-root').contains('Bank Accounts').click()
    cy.get('div.MuiGrid-root p').contains(accountName)
      .parents('[data-test*="bankaccount-list-item-"]')
      .within(() => {
        cy.get('[data-test="bankaccount-delete"]').click();
    });
    cy.get('div.MuiGrid-root p').contains(`${accountName} (Deleted)`).should('be.visible');
  });
});
