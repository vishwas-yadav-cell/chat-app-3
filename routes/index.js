const router = require('express').Router();
const { ensureAuth, ensureGuest } = require('../middleware/authcheck');

router.get('/login', ensureGuest,(req, res) => {
    res.render('login', { layout: 'login' });
});

router.get('/index', ensureAuth,(req, res) => {
    res.render('index');
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
});

module.exports = router;