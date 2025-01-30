import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import {Browser, BrowserContext, chromium, Page} from '@playwright/test'
import * as dotenv from 'dotenv'
import LoginPage from "../pages/loginpage";
import HomePage from "../pages/homepage";

dotenv.config()
setDefaultTimeout(60*1000)

let browser: Browser, context: BrowserContext, page: Page

let loginpage: LoginPage
let homepage: HomePage

export const pageInfo = {
    page,context,browser
}

export const customePages = {
    loginpage, homepage
}

BeforeAll(async function() {
    browser = await setBrowser(process.env.BrowserName, process.env.HeadMode)
    context = await browser.newContext()
    await context.tracing.start({screenshots: false, snapshots: true})
    page = await context.newPage()
})

async function setBrowser(str: string, mode: string){
    const isHeadless = mode === 'true'
    const channelVal = str === 'msedge' ? 'msedge' : str === 'chrome' ? 'chrome' : null
    if(channelVal) {
        browser = await chromium.launch({headless: isHeadless, channel: channelVal})
    }
    return browser
}

Before(async function () {
    pageInfo.page = page
    pageInfo.browser = browser
    pageInfo.context = context

    customePages.loginpage = new LoginPage()
    customePages.homepage = new HomePage()

})


AfterAll(async function () {
    await page.close()
    await context.tracing.stop({path: "./trace-results/trace.zip"})
    await browser.close()
})