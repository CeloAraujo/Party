const router = require("express").Router();

// router services
const servicesRouter = require("./services");

router.use("/", servicesRouter);

//parties router
const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;
