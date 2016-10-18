const config = require('../config');

if (config.isProduction !== true) {
  require("babel-register")();
}

var Main = require('../main');
var server = new Main.default();


server.start()['catch'](function (error) {
  console.log(err.stack);
});
