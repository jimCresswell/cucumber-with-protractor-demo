module.exports = function() {
	this.Given(/^I am on the app homepage$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^I add a todo called "([^"]*)"\.$/, function (todoTitle, callback) {
	  // Write code here that turns the phrase above into concrete actions
	  console.log("Todo title: " + todoTitle);

	  callback.pending();
	});

	this.Then(/^I should see it added to the todo list\.$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});
};