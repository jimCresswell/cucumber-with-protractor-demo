
Feature: Example feature
  As a user of cucumber.js
  I want to have documentation on cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the app homepage
    When I add a todo called "hello world".
    Then I should see it added to the todo list.