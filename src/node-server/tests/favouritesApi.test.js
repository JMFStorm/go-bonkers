const mongoConnection = require("../server/mongoDb");
const { closeConnection, deleteUsers, deleteFavourites, getFavourites } = require("../services/mongoose");
const { testDeleteApi, testPostApi } = require("./testBase");

const validUser = {
  username: "ValidUser1",
  password: "Sekret44",
};

const validFavourite = {
  type: "place",
  placeId: "111",
  name: "New Restaurant",
};

describe("When initially one valid user", () => {
  beforeAll(async () => {
    mongoConnection();
    await deleteUsers();
    await deleteFavourites();
    await testPostApi({ url: "/api/users/register", body: validUser, expectCode: 201 });
  });

  test("Favourite post and deletion succeeds with valid user after login", async () => {
    const favouritesAtStart = await getFavourites();

    const { token } = await testPostApi({ url: "/api/users/login", body: validUser, expectCode: 200 });
    const response = await testPostApi({
      url: "/api/favourites",
      body: validFavourite,
      expectCode: 201,
      token,
    });

    expect(response).toHaveProperty("type", validFavourite.type);
    expect(response).toHaveProperty("placeId", validFavourite.placeId);
    expect(response).toHaveProperty("name", validFavourite.name);
    expect(response).toHaveProperty("createdAt");
    expect(response.createdAt).toBeDefined();
    expect(response).toHaveProperty("user");
    expect(response.user).toBeDefined();
    expect(response).toHaveProperty("id");
    expect(response.id).toBeDefined();

    const favouritesAfterPost = await getFavourites();
    expect(favouritesAfterPost.length).toEqual(favouritesAtStart.length + 1);

    await testDeleteApi({ url: `/api/favourites/${response.id}`, token, expectCode: 204 });

    const favouritesAfterDelete = await getFavourites();
    expect(favouritesAfterDelete.length).toEqual(favouritesAfterPost.length - 1);
  });

  afterAll(async () => {
    await deleteUsers();
    await deleteFavourites();
    closeConnection();
  });
});
