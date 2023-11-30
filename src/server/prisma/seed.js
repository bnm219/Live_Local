const prisma = require("../prisma");
const { faker } = require('@faker-js/faker');

const seed = async () => {
  for (let i = 1; i <= 20; i++) {
    await prisma.user.create({
      data: {
        userName: faker.internet.userName(),
        isBand: faker.datatype.boolean(),
        email: faker.internet.email(),
        imageUrl: "https://images.app.goo.gl/x7njWd9AhDxEF3Vy8",
        city: faker.location.city(),
        password: 'password'
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
