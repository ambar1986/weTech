var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, './public')))
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
)

app.listen(8000, function() {
  console.log('server started on port 8000')
});

