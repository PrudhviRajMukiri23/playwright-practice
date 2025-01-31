import {Page, expect} from '@playwright/test'
import loginPageLocators from '../locators/loginpagelocators'
import Asserts from '../utils/asserts'

export default class LoginPage {

    private locators: any

    constructor() {
        this.locators = new loginPageLocators()
    }

    public async verifyLoginPage(page: Page) {
        await Asserts.validateElementVisibility(await this.locators.signInText.xpath, page)
    }

    public async login(page: Page, userName?: string, password?: string) {
        userName = userName || 'mercury'
        password = password || 'mercury'
        await page.locator(this.locators.userName.xpath).fill(userName)
        await page.locator(this.locators.password.xpath).fill(password)
        await page.locator(this.locators.submit.xpath).click()
    }
}