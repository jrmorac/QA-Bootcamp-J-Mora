
/// <reference types="cypress" />
import { NewAccountPage } from "../../page-objects/pages/newAccount";
import { DeleteAccountPage } from "../../page-objects/pages/deleteAccount";

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
    NewAccountPage.addNewAccount(accountName,routingNumber,accountNumber)
    NewAccountPage.elements.getSuccessName().contains(accountName).should('be.visible')
  });  

  it('Should Delete Account', () => {  
    DeleteAccountPage.deleteAccount(accountName)
    DeleteAccountPage.elements.getSuccessDelete()
    .contains(`${accountName} (Deleted)`).should('be.visible')
  });
});
