const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

//Finds events by city
router.get("/city/:city", async (req, res, next) => { 
  try {
    const { city } = req.params;  
    const event = await prisma.event.findMany({ where: { city: city } });

    res.json(event);

  } catch (err) {
    next(err);
  }
});

//Creates a post connect the user to the events
router.post("/rsvp/:userId/:eventId", async (req, res, next) => {
  //const { userId, eventId } = req.params;
  const userId =  +req.params.userId;
  const eventId = +req.params.eventId;

  try{
      const rsvp = await prisma.user.update({
        where: {
          id:userId
        },
        data:{
          events: {
            connect:{
              id:eventId
            }
          }
        }
      });
      res.json(rsvp);
  } catch (err) {
    next(err)
  }
});