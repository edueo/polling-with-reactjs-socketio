var express = require('express');

var app = express();

app.use(express.static('./public'));

// bootstrap se for o caso
//app.use(express.static('./node_modules/bootstrap/dist'));

app.listen(3000);
console.log('Pooling server is running');
