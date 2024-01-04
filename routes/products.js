const express = require('express')
const productsRouter = express.Router();
var bodyParser = require('body-parser');

productsRouter.use(bodyParser.json());



productsRouter.get('/products', (req, res) => {
    console.log('get Products', req.params, req.body)
  res.send('Products Page')
})


module.exports = productsRouter;