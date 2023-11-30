const express = require("express");

const app = new express();
app.use('/', router);

test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
  