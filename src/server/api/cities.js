const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

router.get("/", async (req, res, next) => {
    try {
      const cities = await prisma.event.groupBy({
        by: ['city']
      });
      console.log("CITIES: "+JSON.stringify(cities));
      res.json(cities);
    } catch (err) {
      next(err);
    }
  });