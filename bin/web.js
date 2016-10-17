require("babel-register")();
var Main = require('../main');
console.log(Main);
var server = new Main.default();


server.start()['catch'](function (error) {
  console.log(err.stack);
});
