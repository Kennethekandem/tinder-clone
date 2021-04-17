const express = require('express');
const router = express.Router();
const user = require('./user');

router.use('/user', user);

router.get('/', (req, res) => {
    res.send("Hello World from Tinder");
});



module.exports = router;