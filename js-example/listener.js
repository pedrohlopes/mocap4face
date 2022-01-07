const express = require('express');
var dgram = require('dgram');
var cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors())

app.use(bodyParser.json());

var client = dgram.createSocket('udp4');
app.post('/', function requestHandler(req, res) {
  console.log(req.body)
  client.send(JSON.stringify(req.body),31000,'0.0.0.0')
  res.end('Hello, World!');
});

app.listen(12000);