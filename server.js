require('dotenv').config({silent: true});
const ENV = process.env.ENV || "development";

const express = require('express');
const http = require('http');
const socket = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socket(server);
const bodyParser  = require("body-parser");
const amazon = require('amazon-product-api');
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const knexLogger = require('knex-logger');
const uuid = require('uuid');
const dbhelper = require("./lib/dbhelper")(knex);
const session = require("express-session")({
    secret: "French fries are meh rice rules.",
    resave: false,
    saveUninitialized: true
});
const sharedsession = require("express-socket.io-session");

const apiRoutes = require("./routes/api");

app.use(session);

io.use(sharedsession(session, {
    autoSave:true
}));


var client = amazon.createClient({
  awsId: process.env.ACCESS_ID,
  awsSecret: process.env.SECRET_ACCESS_KEY,
  awsTag: process.env.AWS_TAG
});

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", apiRoutes(dbhelper));


app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render('index')
})

app.post('/', (req,res) => {
  console.log(req.body)
  client.itemSearch({
    Keywords: req.body.keyword,
    Sort: req.body.sort,
    SearchIndex: req.body.searchIndex,
    MaximumPrice: req.body.MaximumPrice * 100,
    MinimumPrice: req.body.MinimumPrice * 100,
    ResponseGroup: 'Large,VariationSummary',
  }).then((results) => {
    console.log(results)
    const uri = uuid()
    dbhelper.newList(uri)
      .then(() => {
        res.redirect(`/${uri}`)
      })
  }).catch((err) => {
    console.log(err);
  });
})

app.get('/:id', (req, res) => {
  req.session.uri = req.params.id;
  res.render('shoppinglist', {
    uri: req.params.id
  })
})

let userCount = 0;
io.on('connection', function (socket) {
  userCount ++;
  console.log("a user joined: " + userCount + " users");
  const id = socket.handshake.session.uri;
  socket.join("room"+id)
  // let incomingProducts=['hello','bleh']
  // io.in("room-"+id).emit("incomingProducts");

  socket.on("disconnect", (e)=>{
    userCount --;
    console.log("a user left: " + userCount + " users");
  });
});

server.listen( process.env.PORT || 3000, () => {
  console.log('Server running');
});