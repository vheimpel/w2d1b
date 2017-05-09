var https =  require('https');
var http =  require('http');
var url = require('url');

function getNodeJSSSite() {
  //Start a GET request
  https.get('https://nodejs.org', function(response) {
    //Once request is comepleted, log the response codes and headers
    console.log('Status Code: ', response.statusCode);
    console.log('Headers: ', response.headers);

    // Create a string buffer for our output
    var output = "";

    //Add an event handler for the 'data' event
    //This event gets fired everytime we receive a data chunk
    response.on('data', function(data) {
      //Log the length of the chunk for debugging purposes
      console.log('chunk length: ', data.length);

      // Log the data to the screen
      // console.log(data + "\n")

      //append our data to our string buffer
      output += data;
  });


  //Add an event handler for the 'end' event
  //This even gets fired when we are done receiving data
  response.on('end', function() {
    //Simply log the result to the screen
    console.log(output)
  })

});

}

function runHttpServer() {
  // Create an HTTP server
  var server = http.createServer(function(req, res) {
    //This function will get run each time we receive a request

    //We'll respond with a 200 (OK) and a header of Content-Type: Text/plain
    res.writeHead(200, {'content-Type': 'text/plain'});

    //Parse our request's URL into an object we can pick the data out of
    var queryData = url.parse(requ.url, true).query;

    //Debug log the queryData that we found
    console.log(queryData);


    //respond with some hardcoded response and append our query data.
    //this is a first step towards having a server that can respond to queries
    res.end("okay\n" + queryData.q)
  });

//Start the server listening on port 3000
server.listen(3000);

console.log("Server is now listening on 3000")

}

//Call the run server function
runHttpServer();