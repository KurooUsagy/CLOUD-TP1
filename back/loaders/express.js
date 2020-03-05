const routes = require('../api');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

module.exports = (app) => {
    /**
     * Health Check endpoints
     */
    app.get('/status', (req, res) => {
      res.status(200).end();
    });
  
    // Middleware that transforms the raw string of req.body into json
    app.use(bodyParser.json());
    // Load API routes
    app.use('/api', routes());
};