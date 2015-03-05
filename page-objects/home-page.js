// Note that browser and element are globals defined by Potractor. 
// Should page objects have state? Could this be a plain object and so avoid instantiation?
'use strict';

function HomePage() {};
module.exports = HomePage;

// Unlike a WebElement the ElementFinder object understands the Angular digest loop.
// http://angular.github.io/protractor/#/api?view=ElementFinder
var newTodoEl = element(by.model('newTodo'));
var firstTodo = element(by.repeater('todo in todos').row(0));

var url = 'http://localhost:3000/app/index.html';


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
  return firstTodo.element(by.tagName('label')).getText();
};