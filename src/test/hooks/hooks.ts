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

let timeZone: string

export const pageInfo = {
    page,context,browser
}

export const customePages = {
    loginpage, homepage
}

BeforeAll(async function() {
    browser = await setBrowser(process.env.BrowserName, process.env.HeadMode)
    customePages.loginpage = new LoginPage()
    customePages.homepage = new HomePage()
})

Before(async ()=>{
    context = await browser.newContext()
    await context.tracing.start({screenshots: false, snapshots: true})
    page = await context.newPage()

    pageInfo.page = page
    pageInfo.browser = browser
    pageInfo.context = context
})

After(async ()=>{
    await page.close()
    timeZone = Date().toString().replaceAll(" ", "_").replaceAll(":", "-")
    await context.tracing.stop({path: `./trace-results/${timeZone}-trace.zip`})
})

async function setBrowser(str: string, mode: string){
    const isHeadless = mode === 'true'
    const channelVal = str === 'msedge' ? 'msedge' : str === 'chrome' ? 'chrome' : null
    if(channelVal) {
        browser = await chromium.launch({headless: isHeadless, channel: channelVal})
    }
    return browser
}

AfterAll(async function () {
    await browser.close()
})