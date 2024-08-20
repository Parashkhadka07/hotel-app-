const router = require("express").Router;
router.use("/api/users", require("../modules/users/user.route"));

module.exports = router;
