export class DeleteAccount2 {
    url = 'http://localhost:3000/bankaccounts';

    elements = {
        getLink: () => cy.get('.MuiListItemText-root').contains('Bank Accounts'),
        getAccountLst: () => cy.get('div.MuiGrid-root p'),
        getDelBtn: (accountName) => this.elements.getAccountLst()
            .contains(`${accountName}`)
            .parents('[data-test*="bankaccount-list-item-"]')
            .within(() => {
                cy.get('[data-test="bankaccount-delete"]').then(($btn) => {
                    cy.wrap($btn).as('deleteBtn');
            });
        }),
        getSuccessDelete: () => cy.get('div.MuiGrid-root p'),
        }

    deleteAccount(accountName) {
        this.elements.getLink().click();
        this.elements.getDelBtn(accountName);
        cy.get('@deleteBtn').click();
    };
}

export const DeleteAccountPage2 = new DeleteAccount2 ();