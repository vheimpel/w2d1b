
var https = require('https');
var string = "";

module.exports = function getHTML (options, callBack) {

  https.get(options, function(res) {

    res.setEncoding("UTF-8");

    res.on('data', function(d) {
      string += d;
    });

    res.on('end', function(d) {
      callBack(string);
    });
  });
}

