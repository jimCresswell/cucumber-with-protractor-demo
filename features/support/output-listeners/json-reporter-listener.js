module.exports = function JsonOutputHook() {
  var Cucumber = require('cucumber');
  var JsonFormatter = Cucumber.Listener.JsonFormatter();
  var fs = require('fs');

  var filepath = 'cucumber-report.json';

  JsonFormatter.log = function (json) {
    fs.writeFile(filepath, json, function (err) {
      if (err) throw err;
      console.log('json file location: ' + filepath);
    });
  };

  this.registerListener(JsonFormatter);
};