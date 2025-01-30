import {Page, expect} from '@playwright/test'
import homepagelocators from '../locators/homepagelocators'

export default class HomePage {

    private locators: any

    constructor() {
        this.locators = new homepagelocators()
    }

    public async verifySuccessfullLogin(page: Page) {
        await expect(page.locator(this.locators.successfullLoginMessage.xpath)).toContainText("Login Successfully")
    }
}

