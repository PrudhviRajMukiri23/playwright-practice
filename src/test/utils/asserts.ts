import { setDefaultTimeout } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";

setDefaultTimeout(80*1000)
export default class Asserts {

    public static async validateTitle(expectedStr: string, page: Page) {
        expect(await page.title()).toEqual(expectedStr)
    }

    public static async validateText(xpath: string, message: string, page: Page) {
        await expect(page.locator(xpath)).toContainText(message)
    }

    public static async validateElementVisibility(xpath: string, page: Page) {
        await expect(page.locator(xpath)).toBeVisible()
    }
}