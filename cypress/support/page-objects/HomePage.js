class HomePage {
    getLogo() {
        return cy.get('.navbar-brand');
    }

    getNewPostLink() {
        return cy.get('a[href="/editor"]');
    }

    getSettingsLink() {
        return cy.get('a[href="/settings"]');
    }

    getUserNameLink() {
        return cy.get('.nav-link img');
    }
}

export default HomePage
