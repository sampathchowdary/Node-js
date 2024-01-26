const router = require('express').Router();
var bodyParser = require('body-parser');

const products = require('./products')
const prodController = require('../controllers/productController')

router.use(bodyParser.json());


router.get('/', (req, res) => {
    console.log('input data', req.params, req.body)
  res.send('hello world! This is Just a Starting Page')
})

// router.use('/products', products);
// products controller
router.get('/products', prodController.getProducts);




module.exports = router;