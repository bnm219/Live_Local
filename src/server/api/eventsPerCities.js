const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

//Finds events by city
router.get("/city/:city", async (req, res, next) => { //update the frontend enpoints that refrence /:city to include the new endpoints (prob in eventsPerCities slice maybe more)
    try {
      const { city } = req.params;  
      const event = await prisma.event.findMany({ where: { city: city } });

      res.json(event);

    } catch (err) {
      next(err);
    }
  });

  //TODO:  Create the prisma call  to connect the user to the events
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
// const updateAuthor = await prisma.user.update({
//   where: {
//     id: 20,
//   },
//   data: {
//     posts: {
//       connect: {
//         id: 4,
//       },
//     },
//   },
 //})