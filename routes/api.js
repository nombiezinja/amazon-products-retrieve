
const express = require('express');
const router  = express.Router();

module.exports = (dbhelper) => {

  router.get('/search/:id', (req, res) => {

  });

  router.post('/search/:id', (req,res) => {
    console.log('post is running')
  });

  router.get('/shoppinglist/:id', (req,res) => {

  });

  router.post('/shoppinglist/:id', (req,res) => {

  });

  return router;
}

