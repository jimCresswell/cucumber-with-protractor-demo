# Example feature, the description is using feature injection syntax.
# Data tables: https://www.relishapp.com/cucumber/cucumber-js/docs/cucumber-tck/data-tables
# Scenario outlines: supported https://github.com/cucumber/cucumber-js/commit/c2a9916810a224d77c6b7e94260c39bb867aee5b
Feature: Todo list
  As a user of the todo list
  I want to be able to add and read todos
  So that I can remember what I am supposed to do later

  @smoke
  Scenario: Adding a todo
    Given I am on the app home page.
    When I add a todo called "hello world".
    Then I should see it added to the todo list.