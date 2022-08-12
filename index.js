const express = require('express');
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/paper/dist'));

app.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname});
})

var server = app.listen(port, function() {
  console.log('\n\nListening on port %d', server.address().port);
  console.log('\nhttp://localhost:8000/');
})
