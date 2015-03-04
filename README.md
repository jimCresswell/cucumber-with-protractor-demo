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

*WIP - working but messy.*

* Make sure JDK is installed. On Windows you will also have to set the PATH variable [http://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jdk_install.html#CHDEBCCJ].

In a terminal 
* To update WebDriver versions `node .\node_modules\protractor\bin\webdriver-manager update`.
* To start a WebDriver server * `node .\node_modules\protractor\bin\webdriver-manager start`.

In  different terminal
* `node /node_modules/cucumber/bin/cucumber.js` - doesn't work yet!

In yet another terminal
* `node .\node_modules\protractor\bin\protractor protractor-conf.js`
