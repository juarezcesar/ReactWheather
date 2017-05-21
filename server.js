
var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(3001, function(){
  console.log("Express server is up on port 3001")
});


//app.use(express.static('public'))
//  .listen(PORT, () => console.log(`Express listening on port ${PORT}`));
