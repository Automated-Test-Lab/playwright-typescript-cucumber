# language: en

@regression @administration

Feature: Administration Users

    Background: Access the Edit Users page
        Given I access the Edit Users page

    @TC01 @ExceptionScenario
    Scenario Outline: Trying to change user password with different passwords
        And fill new "<password>"
        And fill confirm new "<password1>"
        When click to change password
        Then system returns error message "Passwords do not match"
        Examples:
        |password   | password1  |
        |admin      | admiXXX    | 