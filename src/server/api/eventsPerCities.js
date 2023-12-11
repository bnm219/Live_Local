const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

//Finds events by city
router.get("/:city", async (req, res, next) => {
    try {
      const { city } = req.params;
      console.log("CITY:::: "+ city);
  
      const event = await prisma.event.findMany({ where: { city: city } });
      res.json(event);
    } catch (err) {
      next(err);
    }
  });