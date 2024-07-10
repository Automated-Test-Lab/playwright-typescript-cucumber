# language: en

@regression @feedback

Feature: Send feedbacks

    Background: Access the Feedback page
        Given I access the Feedback page

    @TC04 @BasicScenario
    Scenario: Send feedback successfully
        And fill email
        And fill subject
        And fill question/comment
        When click to submit
        Then system returns "Thank You" message
