const supertest = require("supertest");
const app = require("../server/express");

const api = supertest(app);

test("Get multiple places succeeds", async () => {
  const result = await api
    .post("/api/locations")
    .send({
      searchType: "places",
      tags: ["Restaurant"],
      limit: 5,
      location: {
        lat: 61.0,
        long: 26.0,
      },
      searchDistance: 100,
    })
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(result.body.length > 1).toBe(true);

  result.body.forEach((place) => {
    expect(place).toHaveProperty("id");
    expect(place).toHaveProperty("info_url");
    expect(place).toHaveProperty("name");
    expect(place).toHaveProperty("location");
    expect(place).toHaveProperty("description");
    expect(place).toHaveProperty("tags");
    expect(place).toHaveProperty("opening_hours");
  });
});

test("Get multiple events succeeds", async () => {
  const result = await api
    .post("/api/locations")
    .send({
      searchType: "events",
      tags: ["Helsinki"],
      limit: 5,
      location: {
        lat: 61.0,
        long: 26.0,
      },
      searchDistance: 100,
    })
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(result.body.length > 1).toBe(true);

  result.body.forEach((event) => {
    expect(event).toHaveProperty("id");
    expect(event).toHaveProperty("info_url");
    expect(event).toHaveProperty("name");
    expect(event).toHaveProperty("location");
    expect(event).toHaveProperty("description");
    expect(event).toHaveProperty("tags");
    expect(event).toHaveProperty("event_dates");
  });
});

test("Get single place succeeds", async () => {
  const result = await api
    .post("/api/locations/single")
    .send({
      locationId: "3948",
      type: "place",
    })
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(result.body).toHaveProperty("id");
  expect(result.body).toHaveProperty("info_url");
  expect(result.body).toHaveProperty("name");
  expect(result.body).toHaveProperty("location");
  expect(result.body).toHaveProperty("description");
  expect(result.body).toHaveProperty("tags");
  expect(result.body).toHaveProperty("opening_hours");
});
