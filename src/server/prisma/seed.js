const prisma = require("../prisma");
const { faker } = require('@faker-js/faker');

const seed = async () => {
  for (let i = 1; i <= 20; i++) {
    //Creates Users
    await prisma.user.create({
      data: {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        imageUrl: "https://images.app.goo.gl/x7njWd9AhDxEF3Vy8",
        city: faker.location.city(),
        password: 'password',
        events:  {create: []}
      }
    });
  };
  //Creates Events
  for (let i = 1; i <= 20; i++) {
    await prisma.event.create({
      data: {
        name: faker.company.buzzPhrase(),
        city: faker.location.city(),
        description: faker.random.words({ min: 5, max: 10 }),
        users: {create: []}
      }
    });
  }
};



seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });

