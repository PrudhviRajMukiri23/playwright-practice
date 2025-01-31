import {Page, expect} from '@playwright/test'
import homepagelocators from '../locators/homepagelocators'
import Asserts from '../utils/asserts'

export default class HomePage {

    private locators: any

    constructor() {
        this.locators = new homepagelocators()
    }

    public async verifySuccessfullLogin(page: Page, message?: string) {
        message = message || 'Login Successfully'
        await Asserts.validateText(await this.locators.successfullLoginMessage.xpath, message, page)
    }
}

