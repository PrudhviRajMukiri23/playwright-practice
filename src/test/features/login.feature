Feature: Login Functionality Check

Background: 
    When User navigate to url
    Then Validate the page title

Scenario: Verify login with valid credentials
    Given User is on login page
    When User provide valid username and password
    Then User should able to login successfully

Scenario Outline: Verify login with group of credentials
    Given User is on login page
    When User provide "<username>" and "<password>"
    Then User shpould able to login message as "<message>"
Examples:
    |   username    |   password    |   message                 |
    |   mercury     |   mercury     |   Login Successfully      |
    |   prudhvi     |   prudhvi     |   Login Successfully      |
    |   raj         |   raj         |   Login Successfully      |
    |   bibi        |   bibi        |   Login Successfully      |