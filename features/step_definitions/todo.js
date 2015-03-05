'use strict';

// Require and configure the assertion libraries.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised'); // https://github.com/domenic/chai-as-promised/
chai.use(chaiAsPromised);

// Convenience.
var expect = chai.expect;

// Require and instantiate page objects.
var HomePageObject = require('../../page-objects/home-page');
var homePage = new HomePageObject();

// Define the step definitions
module.exports = function myStepDefinitions() {


  this.Given(/^I am on the app home page\.?$/, function (done) {
    var expectedTitle = 'AngularJS • TodoMVC';

    // Load the home page.
    homePage.get();

    // The page loading is async so we need an async expectation
    // and an async 'done'.
    expect(homePage.getTitle())
      .to.eventually.equal(expectedTitle)
      .notify(done);
  });


  this.When(/^I add a todo called "([^"]*)"\.?$/, function (todoText, done) {
    
    // Share state on the world object. Could also have done this with a closure.
    var world = this;
    world.expectedTodoText = todoText;

    homePage.createTodo(todoText);
    done();
  });


  this.Then(/^I should see it added to the todo list\.?$/, function (done) {
    var world = this;

    // The underlying getText method is async because it waits
    // for Angular to settle down, and it returns a promise.
    homePage.getFirstTodoText()
      .then(function(todoText) {
        expect(todoText).to.equal(world.expectedTodoText);
        done();
      });
  });
};