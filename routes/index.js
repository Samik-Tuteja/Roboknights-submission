const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('home'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.redirect("https://www.youtube.com/watch?v=xvFZjo5PgG0")
}
);

module.exports = router;
