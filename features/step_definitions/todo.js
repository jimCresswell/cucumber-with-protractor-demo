var chai = require('chai');
var chaiAsPromised = require('chai-as-promised'); // https://github.com/domenic/chai-as-promised/

chai.use(chaiAsPromised);
var expect = chai.expect;

var HomePageObject = require('../../page-objects/home-page');
var homePage = new HomePageObject();

module.exports = function myStepDefinitions() {
    
    this.Given(/^I am on the app home page\.?$/, function (done) {
        var expectedTitle = 'AngularJS • TodoMVC';

        homePage.get();

        // Async page loading.
        expect(homePage.getTitle())
            .to.eventually.equal(expectedTitle)
            .notify(done);
    });

    this.When(/^I add a todo called "([^"]*)"\.?$/, function (todoText, done) {
        var world = this;

        // Share state on the world object. Could also have done this with a closure.
        world.expectedTodoText = todoText;

        homePage.createTodo(todoText);

        done();
    });

    this.Then(/^I should see it added to the todo list\.?$/, function (done) {
        var world = this;

        homePage.getFirstTodoText()
            .then(function(todoText) {
                expect(todoText).to.equal(world.expectedTodoText);
                done();
            });
    });
}