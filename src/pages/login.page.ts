import LoginLocators from "../locators/login_locators.ts";

let loginLocators: LoginLocators = new LoginLocators;

class LoginPage {
    public async homeButtonDisplayed () {
        await loginLocators.homeOption.isExisting();
    }

    public async writeCredentials (username: string, password: string) {
        await loginLocators.loginOption.click();
        await loginLocators.inputUsername.setValue(username);
        await loginLocators.inputPassword.setValue(password);
    }

    public async pressLoginButton () {
        await loginLocators.submitButton.click();
    }

    public async getLoginModalText() {
        await loginLocators.modalWindowLogin.waitForDisplayed({ timeout: 5000 })
        return await loginLocators.modalWindowLogin.getText();
    }
}

export default new LoginPage();