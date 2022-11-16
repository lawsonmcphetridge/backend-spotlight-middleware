const { Router } = require('express');

module.exports = Router()
  .get('/teapot', (req, res) => {
    res.status(418).send('Cool message');
  })

  .get('/payment', (req, res) => {
    res.status(402).send('Cool message');
  });
