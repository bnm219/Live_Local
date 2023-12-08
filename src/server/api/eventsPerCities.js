const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

//Finds events by city
router.get("/:city", async (req, res, next) => {
    try {
      const city = +req.params;
  
      const event = await prisma.event.findUnique({ where: { city } });
  
      res.json(event);
    } catch (err) {
      next(err);
    }
  });