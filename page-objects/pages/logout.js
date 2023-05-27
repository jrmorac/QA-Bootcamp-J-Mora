export class Logout {
    url = 'http://localhost:3000/';

    elements = {
        getBtn: () => cy.get('div[data-test="sidenav-signout"]'),
    }

    logout() {
        this.elements.getBtn().click();
    }
}

export const LogoutPage = new Logout ();