exports.config = {
  framework: 'cucumber',
  rootElement: 'body', // location of ng-app directive
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['features/*.feature'],

  // See cucumberOpts in https://github.com/angular/protractor/blob/master/docs/referenceConf.js 
  cucumberOpts: {
    format: 'pretty'
  }
};

