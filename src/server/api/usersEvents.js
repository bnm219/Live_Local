const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

//Finds events by user
router.get("/", async (req, res, next) => { 
    
    try {
        const userId =  res.locals.user.id;
        const userEvents = await prisma.user.findUnique({
             where: { id: userId },   
             include: {
                events: true,
        }
    });

        res.json(userEvents.events);

    } catch (err) {
        next(err);
    }
  });