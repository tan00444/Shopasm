



const express = require('express')
const router = express.Router();

const registerController = require('../app/controllers/Register')

router.get('/', registerController.index)
router.post('/', registerController.insert)


module.exports = router;