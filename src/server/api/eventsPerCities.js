const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

router.use((req, res, next) => {
  // if (!res.locals.user) {
  //   return next(new ServerError(401, "You must be logged in."));
  // }
  console.log("RESPONSE: ", res.locals.user);
  next();
});

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
router.post("/rsvp/:eventId", async (req, res, next) => {
  //const { userId, eventId } = req.params;
  const userId =  res.locals.user.id;
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