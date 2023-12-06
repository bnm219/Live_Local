const prisma = require("../prisma");
const { faker } = require('@faker-js/faker');

const seed = async () => {
  for (let i = 1; i <= 20; i++) {
    await prisma.user.create({
      data: {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        imageUrl: "https://images.app.goo.gl/x7njWd9AhDxEF3Vy8",
        city: faker.location.city(),
        password: 'password'
      }
    });
  };
  //start here to create events
  for (let i = 1; i <= 20; i++) {
    await prisma.event.create({
      data: {
        name: faker.company.buzzPhrase(),
        city: faker.location.city(),
        description: faker.random.words({ min: 5, max: 10 })
      }
    });
  }
  await prisma.usersevents.create({
    data: {
      userId: 1,
      eventId:1
    }
  });


  const cities = await prisma.event.groupBy({ // use this in an express endpoint, after, use the response from the get to see in front end
    by: ['city']
  });
  console.log("CITIES:   "+ JSON.stringify(cities[0].city));
};



seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
