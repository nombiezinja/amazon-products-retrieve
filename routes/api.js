require('dotenv').config({silent: true});
const ENV = process.env.ENV || "development";

const express = require('express');
const router  = express.Router();
const bodyParser  = require("body-parser");
const amazon = require('amazon-product-api');
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);
const dbhelper = require("../lib/dbhelper")(knex);
const knexLogger = require('knex-logger');

var client = amazon.createClient({
  awsId: process.env.ACCESS_ID,
  awsSecret: process.env.SECRET_ACCESS_KEY,
  awsTag: process.env.AWS_TAG
});


module.exports = (dbhelper) => {

  router.get('/search/:id', (req, res) => {
    console.log(req.params.id)
    dbhelper.getQueryParams(req.params.id)
      .then((results) => {
        console.log('query params', results)
        const params = results[0]
        console.log(params.Keywords)
        client.itemSearch({
          Keywords: params.Keywords,
          Sort: params.Sort,
          SearchIndex: params.SearchIndex,
          MaximumPrice: params.MaximumPrice * 100,
          MinimumPrice: params.MinimumPrice * 100,
          ResponseGroup: 'Medium,VariationSummary',
        }).then((results) => {
          console.log(results)
          res.send(results)
        }).catch((err) => {
          console.log(err);
        });
      });
  });

  router.post('/search/:id', (req,res) => {
    console.log('post is running')
    console.log(req.body.input, 'req.body.input');
    const input = req.body.input;
    const uri = req.params.id;
    dbhelper.newSearch(input,uri).then((id) => {
      console.log(id);
      res.send(id)
    })
  });

  router.get('/shoppinglist/:id', (req,res) => {

  });

  router.post('/shoppinglist/:id', (req,res) => {

  });

  return router;
}

