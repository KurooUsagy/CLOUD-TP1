const express = require('express');
const router = express.Router();

module.exports = () => {

    router.get('/', (req, res) => {
        res.send('Get all my books');
    });

    return router;
};
