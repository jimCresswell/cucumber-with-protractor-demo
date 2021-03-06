# Experimenting with Protractor driving tests from Gherkin features via Cucumber.js. 

This is intended to function as a place to research and make notes on the use of Protractor to test Angular apps via the specification automation tool Cucumber in its Cucumber.js incarnation. The app under test (and associated unit tests) are a copy of the [TODO MVC AngularJS example](https://github.com/tastejs/todomvc/tree/master/examples/angularjs).

There is an 'after' hook defined which will insert screenshots of failing tests into the Cucumber json report as base64 encoded attachment (Cucumber.js language) or embedding properties. These will be linked to and displayed in the Jenkins [Cucumber JVM reoprts](https://github.com/masterthought/jenkins-cucumber-jvm-reports-plugin-java) (the one with the HTML reports for the latest run rather than the more typically Jenkins like [Cucumber Test Result Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Cucumber+Test+Result+Plugin)).

## Installation

* Make sure [Node.js](http://nodejs.org/) is installed.
* Clone this repo and change to the repo directory.
* `npm install`

## Running

It's the AngularJS demo TodoMVC app, but if you really want to run it on its own
* `node server.js`
* In a browser navigate to <http://localhost:3000/app/index.html>.

## Testing

### To run the end-to-end tests

* Make sure the JDK is installed. On Windows you will also have to set the PATH variable http://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jdk_install.html#CHDEBCCJ.

#### Using Gulp

If you haven't yet installed/updated WebDriver run `gulp webdriver-update`. If you are having proxy issues then either use the --proxy option or [define your proxy details as environment variables](https://github.com/angular/protractor/pull/966), you may also have to [ignore SSL errors](https://github.com/angular/protractor/blob/847e73961e52caa1537df269589d9cfe6373b986/bin/webdriver-manager#L89). If you need to install Selenium stand alone server run `node .\node_modules\protractor\bin\webdriver-manage update --standalone`.

* Make sure 'Gulp' is intalled globally, `npm install -g gulp`.
* `gulp`.

#### Manually

In a terminal, to start WebDriver
* To update WebDriver versions `node .\node_modules\protractor\bin\webdriver-manager update`.
* To start a WebDriver server * `node .\node_modules\protractor\bin\webdriver-manager start`.

In  different terminal, to start the app
* `node server.js`.

In yet another terminal run Protractor.
* `node .\node_modules\protractor\bin\protractor protractor-conf.js`

### To run the unit tests
I left these in here to highlight the difference in intention between developer facing code tests and product facing end-to-end tests, if you want to run them:
* Install Karma-cli globally, `npm install -g karma-cli`.
* `karma start test/config/karma.conf.js`. The unit tests will try to run in Firefox and Chrome by default.

## Notes
* It is possible to attach screenshots https://github.com/cucumber/cucumber-js/blob/master/features/attachments.feature .
* Cucumber.js doesn't yet support
  * Profiles
  * Multiple formatters
  * Output files (Should be resolved in Cucumber.js v0.5 https://github.com/cucumber/cucumber-js/issues?q=is%3Aopen+is%3Aissue+milestone%3A%220.5+major+features%22).
  * Custom formatters. A HTML formatter and JUnit XML formatter, will be supported in version 0.5 https://github.com/cucumber/cucumber-js/pull/215.
