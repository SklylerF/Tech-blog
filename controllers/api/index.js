const router = require("express").Router();
const postRoutes = require("./postRout");

router.use(`/post`, postRoutes);

module.exports = router;