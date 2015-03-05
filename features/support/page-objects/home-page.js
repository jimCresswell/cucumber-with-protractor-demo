// Note that browser and element are globals defined by Potractor. 
'use strict';

var url = 'http://localhost:3000/app/index.html';

// Unlike a WebElement the ElementFinder object understands the Angular digest loop.
// http://angular.github.io/protractor/#/api?view=ElementFinder
var newTodoEl = element(by.model('newTodo'));

function HomePage() {};

module.exports = HomePage;


HomePage.prototype.get = function() {
	browser.get(url);
};

HomePage.prototype.getTitle = function() {
	return browser.getTitle();
};

HomePage.prototype.createTodo = function(todoText) {
	newTodoEl.sendKeys(todoText);
	newTodoEl.sendKeys('\n');
};

// Returns a promise.
HomePage.prototype.getFirstTodoText = function() {
	return element(by.repeater('todo in todos').row(0)).element(by.tagName('label')).getText();
};