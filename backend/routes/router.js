const router = require("express").Router();

// router services
const servicesRouter = require("./services");

router.use("/", servicesRouter);

module.exports = router;
