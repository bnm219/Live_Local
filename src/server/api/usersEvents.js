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

router.put("/:eventId", async (req, res, next) => {
    try {
        const userId =  res.locals.user.id;
        const id = +req.params.eventId;
        
        const cancelRsvp = await prisma.user.update({
            where: { id:userId },
            data:{
                events: {
                    disconnect: [{id}],
                },
            },
            include: {
                events: true,
            },
        });
    
        res.sendStatus(200);
    } catch (err) {
      next(err);
    }
});

// const result = await prisma.user.update({
//     where: {
//       id: 16,
//     },
//     data: {
//       posts: {
//         disconnect: [{ id: 12 }, { id: 19 }],
//       },
//     },
//     include: {
//       posts: true,
//     },
//   })