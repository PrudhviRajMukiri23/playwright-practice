export default class loginPageLocators {
    signInText = {
        xpath: "//*[contains(text(), 'sign-in here')]",
        description: "sign in test in home page"
    }
    userName = {
        xpath: "//input[@name='userName']",
        description: "username test field"
    }
    password = {
        xpath: "//input[@name='password']",
        description: "password test field"
    }
    submit = {
        xpath: "//input[@name='submit']",
        description: "submit button for login"
    }
}