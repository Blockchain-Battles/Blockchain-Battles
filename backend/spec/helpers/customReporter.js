const chalk = require('chalk');

jasmine.getEnv().addReporter({
  specDone: function (result) {
    let color = result.status === 'passed' ? 'green' : 'red';
    console.log(chalk[color](result.fullName + ' was ' + result.status));
    for (var i = 0; i < result.failedExpectations.length; i++) {
      console.log(chalk.red('Failure: ' + result.failedExpectations[i].message));
      console.log(result.failedExpectations[i].stack);
    }
  }
});
