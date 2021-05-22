const mongoConnection = require("../server/mongoDb");
const { closeConnection, getUsers, deleteUsers } = require("../services/mongoose");
const { testPostApi } = require("./testBase");

const validUser = {
  username: "ValidUser1",
  password: "Sekret44",
};

describe("When initially no users", () => {
  beforeAll(async () => {
    mongoConnection();
    await deleteUsers();
  });

  test("User register succeeds", async () => {
    const usersAtStart = await getUsers();

    const response = await testPostApi({ url: "/api/users/register", body: validUser, expectCode: 201 });

    expect(response).toHaveProperty("favourites", []);
    expect(response).toHaveProperty("username", validUser.username);
    expect(response).toHaveProperty("userId");

    const usersAtEnd = await getUsers();

    expect(usersAtEnd.length).toBe(usersAtStart.length + 1);
    expect(usersAtEnd.map((u) => u.username)).toContain(validUser.username);
  });

  test("And user login succeeds with the same credentials", async () => {
    const usersAtStart = await getUsers();

    const response = await testPostApi({ url: "/api/users/login", body: validUser, expectCode: 200 });

    expect(response).toHaveProperty("token");
    expect(response.token).toBeDefined();
    expect(response).toHaveProperty("username", validUser.username);
    expect(response).toHaveProperty("userId");

    const usersAtEnd = await getUsers();

    expect(usersAtEnd.length).toBe(usersAtStart.length);
  });

  afterAll(async () => {
    await deleteUsers();
    closeConnection();
  });
});
