class StartPage {
    getLogo() {
        return cy.get('.navbar-brand');
    }
    getCentralLogo() {
        return cy.get('.logo-font');
    }
    getSignInLink(){
        return cy.get('a[href="/login"]');
    }
    getSignUpLink(){
        return cy.get('a[href="/register"]');
    }
}
export default StartPage
