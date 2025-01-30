import { expect, Page } from "@playwright/test";

export default class Asserts {

    public static async validateTitle(expectedStr: string, page: Page) {
        expect(await page.title()).toEqual(expectedStr)
    }
}