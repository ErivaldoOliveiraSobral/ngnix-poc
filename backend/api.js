const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('Olá, mundo!');
});

router.get('/db', (req, res) => {
    res.status(200).json(require('./db/index.json'));
});

module.exports = router