import { Given, When, Then } from "@cucumber/cucumber";
import {pageInfo} from '../hooks/hooks'
import { customePages } from "../hooks/hooks";
import Asserts from "../utils/asserts";

When('User navigate to url', async function () {
    await pageInfo.page.goto(process.env.url)
});

Then('Validate the page title', async function () {
    await Asserts.validateTitle("Welcome: Mercury Tours", pageInfo.page)
});

Given('User is on login page', async function () {
    await customePages.loginpage.verifyLoginPage(pageInfo.page)
});

When('User provide valid username and password', async function () {
    await customePages.loginpage.login(pageInfo.page)
});

Then('User should able to login successfully', async function () {
    await customePages.homepage.verifySuccessfullLogin(pageInfo.page)
});