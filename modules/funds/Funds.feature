# language: en

@regression @funds

Feature: Transfer Funds

    Background: Access the Funds Transfer page
        Given I access the Funds Transfer page

    @TC05 @BasicScenario
    Scenario: Make a successful transfer
        And select from account "800001 Checking"
        And select to account "800000 Corporate"
        And fill amount to transfer value "200000"
        When click to Transfer Money
        Then system returns "From Account and To Account fields cannot be the same."