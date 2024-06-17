import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnLogin() {
        return $('#login-button');
    }

    get errorMessage() {
        return $('//div[@class="error-message-container error"]')
    }

    getIconX(element){
        return element.$(`//*[@data-icon="times-circle"]`)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.provideCredentials(username, password)
        await this.submitLogin()
    }

    async provideCredentials(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    async submitLogin() {
        await this.btnLogin.click();
    }

    open() {
        browser.url("/")
        browser.maximizeWindow()
    }

}

export default new LoginPage();
