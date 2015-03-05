# Example feature, the description is using feature injection syntax.
Feature: Todo list
  As a user of the todo list
  I want to be able to add and read todos
  So that I can remember what I am supposed to do later

  @smoke
  Scenario: Adding a todo
    Given I am on the app homepage.
    When I add a todo called "hello world".
    Then I should see it added to the todo list.