# Example feature, the description is using feature injection syntax.
Feature: Todo list
  As a user of the todo list
  I want to be able to add and read todos
  So that I can remember what I am supposed to do later


  @home @smoke
  Scenario: Adding a todo
    Given I am on the app home page.
    When I add a todo called "hello world".
    Then I should see it added to the todo list.


  # Data table.
  # Data tables: https://www.relishapp.com/cucumber/cucumber-js/docs/cucumber-tck/data-tables
  @home @regression
  Scenario: Adding multiple todos
    Given I am on the app home page.
    When I add multiple todos:
      | First todo  |
      | Second todo |
    Then there should be that number of todos in the list.



  # Scenario outline.
  # Scenario outlines: supported https://github.com/cucumber/cucumber-js/commit/c2a9916810a224d77c6b7e94260c39bb867aee5b
  @home @outline
  Scenario Outline: Edge case todos
    Given I am on the app home page.
    When I add a todo called "<todo text>".
    Then it should <appear or not> in the list.

    Examples:
      | todo text | appear or not |
      | howdy     | appear        |
      |           | not appear    |


  # Senario with pending tests.
  @someOtherTag
  Scenario: Anther great scenario
    Given I am on the app home page.
    When Something is done.
    Then there should be a measurable result.