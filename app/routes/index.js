const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Andrei Georgescu | Software Engineer' 
  });
});

router.get('/*', (req, res) => {
  res.redirect('/');
});

router.get('/blog', (req, res) => {
  res.redirect('https://medium.com/@ageor');
});

module.exports = router;
