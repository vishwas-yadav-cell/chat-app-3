const router = require('express').Router();
const passport = require('passport');

router.get('/google',
    passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/index');
    });

module.exports = router;