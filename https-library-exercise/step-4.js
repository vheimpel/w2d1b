
var https = require('https');
var string = "";

function getHTML(options, callBack) {

  https.get(options, function(buffer) {

    buffer.on('data', function(data) {
      for (var i = 0; i < data.length; i++) {
        string = string + data[i] + '\n'
      }
      callBack(data);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getHTML(requestOptions, printHTML);