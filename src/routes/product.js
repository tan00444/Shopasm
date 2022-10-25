const express = require('express')
const router = express.Router()

const multer = require('./upload')

const productController = require('../app/controllers/ProductController')





router.get('/create',productController.create)
router.post('/store',multer.single('img'), productController.store)
router.get('/search/', productController.search)
router.get('/:id/edit', productController.edit)
router.post('/:id', productController.update)
router.get('/:id/delete', productController.delete)
router.get('/:name', productController.show)
router.get('/', productController.index)


module.exports = router;