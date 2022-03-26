const express = require('express')
const router = express.Router()
const productControll = require('../controllers/productControllers')

router.route('/')
    .get(productControll.getProducts)
    .post(productControll.createProducts)

    router.route('/:id')
    .delete(productControll.deleteProducts)
    .put(productControll.updateProducts)


module.exports = router
