
var https = require('https');
var string = "";

function getAndPrintHTML(options) {

  https.get(options, function(buffer) {

  buffer.on('data', function(data) {
    for (var i = 0; i < data.length; i++) {
      string = string + data[i] + '\n'
    }

    console.log(string);

  });

});
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);