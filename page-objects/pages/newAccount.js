export class NewAccount {
    url = 'http://localhost:3000/bankaccounts';

    elements = {
        getLink: () => cy.get('.MuiListItemText-root').contains('Bank Accounts'),
        getBtn: () => cy.get('.MuiButton-label').contains('Create'),
        getAccountName: () => cy.get('#bankaccount-bankName-input'),
        getRoutingNumber: () => cy.get('#bankaccount-routingNumber-input'),
        getAccountNumber: () => cy.get('#bankaccount-accountNumber-input'),
        getSubmitBtn: () => cy.get('button[data-test="bankaccount-submit"]'),
        getSuccessName: () => cy.get('li[data-test*="bankaccount-list-item-"'),
    }

    addNewAccount(accountName,routingNumber,accountNumber) {
        this.elements.getLink().click();
        this.elements.getBtn().click();
        this.elements.getAccountName().type(accountName);
        this.elements.getRoutingNumber().type(routingNumber);
        this.elements.getAccountNumber().type(accountNumber);
        this.elements.getSubmitBtn().click();
    }
}

export const NewAccountPage = new NewAccount ();