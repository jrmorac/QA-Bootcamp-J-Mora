
/// <reference types="cypress" />
import { NewAccountPage } from "../../page-objects/pages/newAccount";
import { DeleteAccountPage2 } from "../../page-objects/pages/deleteAccount2";
import { LoginPage } from "../../page-objects/pages/login";
import { LogoutPage } from "../../page-objects/pages/logout";

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
    LoginPage.login(username,password)
  });

  afterEach(()=> {
    //Log out
    LogoutPage.logout();
  });

  it('Should Create New Account', () => {
    NewAccountPage.addNewAccount(accountName,routingNumber,accountNumber)
    NewAccountPage.elements.getSuccessName()
        .contains(accountName)
        .should('be.visible')
  });  

  it('Should Delete Account', () => {  
    DeleteAccountPage2.deleteAccount(accountName)
    DeleteAccountPage2.elements.getSuccessDelete()
        .contains(`${accountName} (Deleted)`)
        .should('be.visible')
  });
});
