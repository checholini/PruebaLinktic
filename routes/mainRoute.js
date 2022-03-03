var express = require('express')
var mainRoute = require('../controllers/mainController')

var router = express.Router()

router.get('/buyAll', mainRoute.buyAll)

module.exports = router;