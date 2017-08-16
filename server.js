require('dotenv').config({silent: true});

const express = require('express');
const http = require('http');
const socket = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socket(server);
const bodyParser  = require("body-parser");
const amazon = require('amazon-product-api');


var client = amazon.createClient({
  awsId: process.env.ACCESS_ID,
  awsSecret: process.env.SECRET_ACCESS_KEY,
  awsTag: process.env.AWS_TAG
});

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render('index')
})

app.post('/', (req,res) => {
  client.itemSearch({
  keywords: req.body.keyword,
  searchIndex: req.body.searchIndex,
  responseGroup: 'ItemAttributes,Offers,Images',
  sort: 'Salesrank'
}).then(function(results){
  console.log(results);
}).catch(function(err){
  console.log(err);
});

})

server.listen( process.env.PORT || 3000, () => {
  console.log('Server running');
});