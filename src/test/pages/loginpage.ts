import {Page, expect} from '@playwright/test'
import loginPageLocators from '../locators/loginpagelocators'

export default class LoginPage {

    private locators: any

    constructor() {
        this.locators = new loginPageLocators()
    }

    public async verifyLoginPage(page: Page) {
        await expect(page.locator(this.locators.signInText.xpath)).toBeVisible()
    }

    public async login(page: Page) {
        await page.locator(this.locators.userName.xpath).fill('mercury')
        await page.locator(this.locators.password.xpath).fill('mercury')
        await page.locator(this.locators.submit.xpath).click()
    }
}