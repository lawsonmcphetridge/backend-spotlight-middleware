const { Router } = require('express');

module.exports = Router().get('/purple', (req, res) => {
  res.json(req.colors);
});
