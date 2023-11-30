const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

//function homeEndPoint(req, res){
    router.get("/", async (req, res, next) => {
        try {
        const user = await prisma.user.findMany();
        res.json(user);
        } catch (err) {
        next(err);
        }
    });
//}

  router.get('/:userName', async (req, res, next) => {
    console.log(req.body) 
    try {
      const userName = +req.params.userName;
  
      const user = await prisma.students.findUnique({ where: { userName } });
      if (!userName) {
        return next({
          status: 404,
          message: `Could not find  ${userName}.`,
        });
      }
  
      res.json(user);
    } catch {
      next();
    }    
  });

  //export default router;
