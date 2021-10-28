import StartPage from 'PageObjects/StartPage';
import SignUpPage from 'PageObjects/SignUpPage';
import HomePage from "PageObjects/HomePage";
import faker from 'faker';


it('Sign Up Test', function () {
    cy.visit('http://localhost:4100/');

    const startPage = new StartPage();
    const signUpPage = new SignUpPage();
    const homepage = new HomePage();

    startPage.getSignUpLink().click();
    const randomUserName = faker.name.firstName();
    const randomEmail = faker.internet.email();
    const password = faker.internet.password();

    signUpPage.getUsernameInput().type(randomUserName);
    signUpPage.getEmailInput().type(randomEmail);
    signUpPage.getPasswordInput().type(password);
    signUpPage.getSignUpButton().click();

    homepage.getUserNameLink().should('have.class', 'user-pic');
})
