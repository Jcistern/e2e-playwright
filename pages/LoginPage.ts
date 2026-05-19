import { Page, Locator } from '@playwright/test'
import { LoginLocators } from '../locators/login.locators'

export class LoginPage {
    readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator(LoginLocators.usernameInput);
        this.passwordInput = page.locator(LoginLocators.passwordInput);
        this.loginButton = page.locator(LoginLocators.loginButton);
        this.errorMessage = page.locator(LoginLocators.errorMessage);
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage(): Promise<string> {
        return (await this.errorMessage.textContent()) || '';
    }
     
    async isErrorVisible(): Promise<boolean> {
        return await this.errorMessage.isVisible();
    }
}