# language: en

@regression @login

Feature: Login

    Background: Sign off
        Given that I log out of the system

    @TC05 @ExceptionScenario
    Scenario Outline: Trying to enter incorrect username
        And fill username "<username>"
        And fill password "<password>"
        When click to login
        Then system returns "Login Failed: We're sorry, but this username or password was not found in our system. Please try again."
    Examples:
        |username   | password  |
        |adminXX    | admin     |  

    @TC06 @ExceptionScenario
    Scenario Outline: Trying to enter incorrect password
        And fill username "<username>"
        And fill password "<password>"
        When click to login
        Then system returns "Login Failed: We're sorry, but this username or password was not found in our system. Please try again."
    Examples:
        |username   | password  |
        |admin      | admiXXX   |  

