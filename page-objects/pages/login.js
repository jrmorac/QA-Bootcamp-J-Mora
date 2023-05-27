export class Login {
    url = 'http://localhost:3000/signin';

    elements = {
        getUsername: () => cy.get('#username'),
        getPassword: () => cy.get('#password'),
        getBtn: () => cy.get('.MuiButton-label'),
    }

    login(username,password) {
        this.elements.getUsername().type(username);
        this.elements.getPassword().type(password);
        this.elements.getBtn().click()
    }
}

export const LoginPage = new Login ();