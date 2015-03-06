/**
 * A page object for the example app home page.
 * 
 * Note that browser, element and by are globals defined by Potractor.
 */
/* global browser, element, by */ 
'use strict';


var _ = require('underscore');
var basePageObject = require('./page-base');


// Functions defined separately so that docs can be preserved.
var homePage = {
	url: 'http://localhost:3000/app/index.html',
	createTodo: createTodo,
	getFirstTodoText: getFirstTodoText
};

// Mix in default page object properties and methods.
_.defaults(homePage, basePageObject);

// Export the home page object.
module.exports = homePage;



/**
 * Elements on the page.
 * 
 * Unlike a WebElement the ElementFinder object understands the Angular digest loop.
 * http://angular.github.io/protractor/#/api?view=ElementFinder
 */
var newTodoEl = element(by.model('newTodo'));
var firstTodo = element(by.repeater('todo in todos').row(0));


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