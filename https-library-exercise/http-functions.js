
var https = require('https');
var string = "";

module.exports = function getHTML (options, callBack) {

      https.get(options, function(buffer) {

        buffer.on('data', function(data) {
          for (var i = 0; i < data.length; i++) {
            string = string + data[i] + '\n'
          }
          console.log("hello");
          // callBack(string);
        });
      });
    }

  function printHTML (html) {
    console.log(html);
  }
  // var requestOptions = {
  //   host: 'sytantris.github.io',
  //   path: '/http-examples/step3.html'
  // };

