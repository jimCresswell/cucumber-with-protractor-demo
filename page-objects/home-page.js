/**
 * A page object for the example app home page.
 * 
 * Note that browser, element and by are globals defined by Potractor.
 */
/* global browser, element, by */ 
'use strict';


/**
 * Elements on the page.
 * 
 * Unlike a WebElement the ElementFinder object understands the Angular digest loop.
 * http://angular.github.io/protractor/#/api?view=ElementFinder
 */
var newTodoEl = element(by.model('newTodo'));
var firstTodo = element(by.repeater('todo in todos').row(0));


// Functions defined separately so that docs can be preserved.
module.exports = {
	url: 'http://localhost:3000/app/index.html',
	get: get,
	getTitle: getTitle,
	createTodo: createTodo,
	getFirstTodoText: getFirstTodoText
};


/**
 * Navigate to the home page.
 * @return {undefined}
 */
function get() {
  browser.get(this.url);
}


/**
 * Get the page title.
 * @return {string} page title.
 */
function getTitle() {
  return browser.getTitle();
}


/**
 * Create a new todo item.
 * @param  {string} todoText
 * @return {undefined}
 */
function createTodo(todoText) {
  newTodoEl.sendKeys(todoText);
  newTodoEl.sendKeys('\n');
}


/**
 * Get a promise for the text content of the first todo item.
 * @return {promise} The text content of the first todo item.
 */
function getFirstTodoText() {
  return firstTodo.element(by.tagName('label')).getText();
}