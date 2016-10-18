var Main = require('./main');
var server = new Main.default();


server.start()['catch'](function (error) {
  console.log(err.stack);
});
