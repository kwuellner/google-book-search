const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api")

// api route
router.use("/api", apiRoutes);

// if no api route hit, send react app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;