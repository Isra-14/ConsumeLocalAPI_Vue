const express = require('express')
const router = express.Router()
const bamxController = require('../controller/bamx.controller')

router.get('/donors', bamxController.GetDonors)

module.exports = router