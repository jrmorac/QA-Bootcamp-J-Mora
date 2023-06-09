import { bankaccountAPI, bankaccountAPIPage } from "../../page-objects/pages/bankaccountAPI";
const apiBankAccounts = `${Cypress.env("apiUrl")}/bankAccounts`;

describe('BankAccount API examples', () => {
  //let accountID;
  let accountIDArray = new Array(5);
  let bankNameArray = new Array(5);
  let accountNumberArray = new Array(5);
  let routingNumberArray = new Array(5);

  beforeEach(() => {
    cy.login('Katharina_Bernier',"s3cret",{ rememberUser:true });
  });

  it('Should Create a bankaccount with API', () => {
    for(let i=0; i<5;i++){
      accountIDArray[i] = '123456789';
      bankNameArray[i] = 'Jose Test'+`${i}`;
      accountNumberArray[i] = '123456789';
      routingNumberArray[i] = '123456789';
      bankaccountAPIPage.createBankAccount(apiBankAccounts,bankNameArray[i],accountNumberArray[i],routingNumberArray[i],accountIDArray[i]);
    }
  });

  it('Should List bankaccounts with API', () => {
    for(let i=0; i<5;i++){
      bankaccountAPIPage.getBankAccount(apiBankAccounts,accountIDArray[i]);
    }
  });

  it('Should Delete bankaccounts with API', () => {
    for(let i=0; i<5;i++){
      bankaccountAPIPage.deleteBankAccount(apiBankAccounts,accountIDArray[i]);
    }
  });
  
  after(()=> {
    cy.logoutByXstate()
  });
});
