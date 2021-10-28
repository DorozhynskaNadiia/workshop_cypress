class AddPostPage {
    getTitleInput() {
        return cy.get('input[placeholder="Article Title"]');
    }

    getDescriptionInput() {
        return cy.get('input[placeholder="What\'s this article about?"]');
    }

    getArticleTextInput() {
        return cy.get('.form-group textarea');
    }

    getTagsInput() {
        return cy.get('input[placeholder="Enter tags"]');
    }

    getPublishButton() {
        return cy.get('button[type=button]');
    }
}

export default AddPostPage