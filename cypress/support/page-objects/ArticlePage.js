class ArticlePage {
    getTitle() {
        return cy.get('.banner .container');
    }

    getArticleText() {
        return cy.get('.article-content p');
    }

    getCommentInput() {
        return cy.get('textarea[placeholder="Write a comment..."]');
    }

    getPostCommentButton() {
        return cy.get('button[type=submit]');
    }

    getEditArticleButton() {
        return cy.get('.btn-outline-secondary');
    }

    getDeleteArticleButton() {
        return cy.get('.btn-outline-danger');
    }
}

export default ArticlePage


//.banner .container