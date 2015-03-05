# Experimenting with Cucumber driving Protractor

## Installation

* Make sure [Node.js](http://nodejs.org/) is installed.
* Clone this repo and change to the repo directory.
* `npm install`

## Running

To start the application
* `node server.js`
* In a browser navigate to http://localhost:3000/app/index.html

## Testing

### To run the unit tests

* Install Karma-cli globally, `npm install -g karma-cli`.
* `karma start test/config/karma.conf.js`. The unit tests will try to run in Firefox and Chrome by default.

### To run the end-to-end tests

* Make sure JDK is installed. On Windows you will also have to set the PATH variable http://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jdk_install.html#CHDEBCCJ.

In a terminal, to start WebDriver
* To update WebDriver versions `node .\node_modules\protractor\bin\webdriver-manager update`.
* To start a WebDriver server * `node .\node_modules\protractor\bin\webdriver-manager start`.

In  different terminal, to start the app
* `node server.js`.

In yet another terminal
* `node .\node_modules\protractor\bin\protractor protractor-conf.js`

## Notes
* Cucumber.js doesn't yet support
  * Profiles
  * Multiple formatters
  * Output files (Should be resolved in Cucumber.js v0.5 https://github.com/cucumber/cucumber-js/issues?q=is%3Aopen+is%3Aissue+milestone%3A%220.5+major+features%22).
  * A HTML formatter, again supported in version 0.5.