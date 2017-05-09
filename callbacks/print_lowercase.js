
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function printLowercase(html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowercase);