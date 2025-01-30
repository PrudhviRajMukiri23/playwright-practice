Feature: Login Functionality Check

Background: 
    When User navigate to url
    Then Validate the page title

Scenario: Verify login with valid credentials
    Given User is on login page
    When User provide valid username and password
    Then User should able to login successfully