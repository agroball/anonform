const router = require('express').Router();

const { signup } = require('../controller/appController.js')


/** HTTP Reqeust */
router.post('/send-email', signup);


module.exports = router;
