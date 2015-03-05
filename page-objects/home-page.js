/**
 * A page object for the example app home page.
 * 
 * Note that browser and element are globals defined by Potractor.
 */
/* global browser, element */ 
'use strict';


// Should page objects have state? Could this be a plain object and so avoid instantiation?
function HomePage() {};
module.exports = HomePage;


/**
 * Elements on the page.
 * 
 * Unlike a WebElement the ElementFinder object understands the Angular digest loop.
 * http://angular.github.io/protractor/#/api?view=ElementFinder
 */
var newTodoEl = element(by.model('newTodo'));
var firstTodo = element(by.repeater('todo in todos').row(0));


/**
 * Constants.
 */
var url = 'http://localhost:3000/app/index.html';


/**
 * Navigate to the home page.
 * @return {undefined}
 */
HomePage.prototype.get = function() {
  browser.get(url);
};


/**
 * Get the page title.
 * @return {string} page title.
 */
HomePage.prototype.getTitle = function() {
  return browser.getTitle();
};


/**
 * Create a new todo item.
 * @param  {string} todoText
 * @return {undefined}
 */
HomePage.prototype.createTodo = function(todoText) {
  newTodoEl.sendKeys(todoText);
  newTodoEl.sendKeys('\n');
};


/**
 * Get a promise for the text content of the first todo item.
 * @return {promise} The text content of the first todo item.
 */
HomePage.prototype.getFirstTodoText = function() {
  return firstTodo.element(by.tagName('label')).getText();
};