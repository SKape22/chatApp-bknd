const express = require('express')
const userRoutes = require("./user/routes")
const contactsRoutes = require("./contacts/routes")
const messageRoutes = require("./message/routes")

const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));

router.use('/docs', express.static('docs'));

router.use('/user', userRoutes);

router.use('/contacts', contactsRoutes);

router.use('/message/', messageRoutes);

module.exports = router;