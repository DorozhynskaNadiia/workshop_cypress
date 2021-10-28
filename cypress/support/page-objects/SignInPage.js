class SignInPage {
    getEmailInput() {
        return cy.get('fieldset [type=email]');
    }

    getPasswordInput() {
        return cy.get('fieldset [type=password');
    }

    getSignInButton() {
        return cy.get('button[type=submit]');
    }

    getSignUpLink() {
        return cy.get('.text-xs-center a[href="/register"]');
    }
}

export default SignInPage
