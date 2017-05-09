
var https = require('https');
var string = "";

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(buffer) {

  buffer.on('data', function(data) {
    for (var i = 0; i < data.length; i++) {
      string = string + data[i]
    }

    console.log(string + '\n');

  });

});
}

getAndPrintHTML();