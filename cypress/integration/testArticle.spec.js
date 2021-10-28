import HomePage from "PageObjects/HomePage";
import AddPostPage from "PageObjects/AddPostPage";
import SignInPage from "PageObjects/SignInPage";
import StartPage from "PageObjects/StartPage";
import ArticlePage from "PageObjects/ArticlePage";

beforeEach(() => {
    cy.visit('http://localhost:4100/');
    const startPage = new StartPage();
    const singInPage = new SignInPage();

    startPage.getSignInLink().click();
    singInPage.getEmailInput().type('test@gmail.com');
    singInPage.getPasswordInput().type('test');
    singInPage.getSignInButton().click();
})

it('Add New Post', function () {
    const homepage = new HomePage();
    const addPostPage = new AddPostPage();
    const articlePage = new ArticlePage();
    const title = 'Text Title';
    const text = 'Article Text';

    homepage.getNewPostLink().click();

    addPostPage.getTitleInput().type(title);
    addPostPage.getDescriptionInput().type('Text Description');
    addPostPage.getArticleTextInput().type(text);
    addPostPage.getTagsInput().type('Tag');
    addPostPage.getPublishButton().click();

    articlePage.getTitle().find('h1').should('have.text', title);
    articlePage.getArticleText().should('have.text', text);
})
