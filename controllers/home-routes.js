const router = require('express').Router();


router.get('/', async (req, res) => {

    try {
        res.render('home');
    } catch (err) {
        res.status(500).send(err)
    }
});

router.get("/dashboard", async (req, res) => {
    try {
        res.render("dashboard");
    } catch (err) {
        res.status(500).send(err)
    }

});

router.get("/login", async (req, res) => {
    try {
        res.render("login");
    } catch (err) {
        res.status(500).send(err)
    }

});

router.get("/sighnup", async (req, res) => {
    try {
        res.render("sighnup");
    } catch (err) {
        res.status(500).send(err)
    }

});

router.get("/newpost", async (req, res) => {
    try {
        res.render("newPost");
    } catch (err) {
        res.status(500).send(err)
    }

});



module.exports = router;