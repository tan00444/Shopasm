const express = require('express')
const router = express.Router();

const categoryController = require('../app/controllers/CategoryController')



router.get('/create', categoryController.create)
router.get('/:id/edit', categoryController.edit)
router.post('/store', categoryController.store)
router.post('/:id', categoryController.update)
router.get('/:id/delete', categoryController.delete)
router.get('/', categoryController.index)


module.exports = router;