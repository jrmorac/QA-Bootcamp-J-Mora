export class bankaccountAPI {
    url = '/bankAccounts';

    elements = {
        }

    createBankAccount(apiBankAccounts,bankName,accountNumber,routingNumber,accountID) {
        cy.request("POST",`${apiBankAccounts}`,{
            bankName: `${bankName}`,
            accountNumber: `${accountNumber}`,
            routingNumber: `${routingNumber}`
          }).then((response) => {
            accountID = response.body.account.id;
            expect(response.status).to.eq(200);
        })
    }

    getBankAccount(apiBankAccounts,accountID) {
        cy.request("GET",`${apiBankAccounts}`,{}).then((response) => {
            accountID = response.body.results.id;
            expect(response.status).to.eq(200);
        })
    }

    deleteBankAccount(apiBankAccounts,accountID) {
        cy.request("DELETE",`${apiBankAccounts}/${accountID}`,{}).then((response) => {
            expect(response.status).to.eq(200);
        })
    }
}

export const bankaccountAPIPage = new bankaccountAPI ();
