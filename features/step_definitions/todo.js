var chai = require('chai');
var chaiAsPromised = require('chai-as-promised'); // https://github.com/domenic/chai-as-promised/


chai.use(chaiAsPromised);
var expect = chai.expect;


module.exports = myStepDefinitions;


function myStepDefinitions() {
    this.Given(/^I am on the app homepage\.?$/, function (done) {
        // The "done" or "callback" function has usefull methods
        // such as "pending" and "fail".

        // TODO: Create a page object factory function and a homepage object convenience object.
        var homepageUrl = 'http://localhost:3000/app/index.html';
        var homepageTitle = 'AngularJS • TodoMVC';

        browser.get(homepageUrl);

        // Async page loading.
        expect(browser.getTitle())
            .to.eventually.equal(homepageTitle)
            .notify(done);
    });

    this.When(/^I add a todo called "([^"]*)"\.?$/, function (todoTitle, done) {
        var world = this;
        var newTodoEl = element(by.model('newTodo'));

        // Share state on the world object. Could also have done this with a closure.
        world.expectedTodoTitle = todoTitle;

        newTodoEl.sendKeys(todoTitle);
        newTodoEl.sendKeys('\n');
        done();
    });

    this.Then(/^I should see it added to the todo list\.?$/, function (done) {
        var world = this;

        // Unlike a WebElement the ElementFinder object understands the Angular digest loop.
        // http://angular.github.io/protractor/#/api?view=ElementFinder
        element(by.repeater('todo in todos').row(0)).element(by.tagName('label')).getText().then(function(todoTitle) {
            expect(todoTitle).to.equal(world.expectedTodoTitle);
            done();     
        });
    });
}