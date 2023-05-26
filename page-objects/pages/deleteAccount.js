export class DeleteAccount {
    url = 'http://localhost:3000/bankaccounts';

    elements = {
        getLink: () => cy.get('.MuiListItemText-root').contains('Bank Accounts'),
        getDelBtn: () => cy.get('div.MuiGrid-root p'),
        getSuccessDelete: () => cy.get('div.MuiGrid-root p'),
    }

    deleteAccount(accountName) {
        this.elements.getLink().click();
        this.elements.getDelBtn().contains(accountName)
            .parents('[data-test*="bankaccount-list-item-"]')
            .within(() => {
                cy.get('[data-test="bankaccount-delete"]').click();
        });
    }
}

export const DeleteAccountPage = new DeleteAccount ();