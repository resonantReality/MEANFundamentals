const express = require(`express`);

const router = express.Router();

router.get(`/`, function(req, res) {
    res.send(`Welcome to the admin dashboard`);
});

router.get(`/about`, function(req, res) {
    res.send(`About page`);
});

module.exports = router;