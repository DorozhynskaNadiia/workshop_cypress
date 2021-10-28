class SignUpPage {
    getUsernameInput() {
        return cy.get('fieldset [type=text]');
    }

    getEmailInput() {
        return cy.get('fieldset [type=email]');
    }

    getPasswordInput() {
        return cy.get('fieldset [type=password');
    }

    getSignUpButton() {
        return cy.get('button[type=submit]');
    }
}

export default SignUpPage
