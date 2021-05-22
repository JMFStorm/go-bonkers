import deepFreeze from "deep-freeze";

import userReducer from "../redux/userReducer";
import {
  addFavourite,
  setLoadingState,
  setUser,
  logoutUser,
  removeFavourite,
  setUserFavourites,
} from "../redux/userActions";

const initialUserState = {
  isLoading: false,
  currentUser: {},
  userFavourites: [],
  isLogged: false,
};

describe("userReducer", () => {
  test("setLoadingState works", () => {
    deepFreeze(initialUserState);
    const state1 = userReducer(initialUserState, setLoadingState(true));
    expect(state1.isLoading).toEqual(true);

    deepFreeze(state1);
    const state2 = userReducer(state1, setLoadingState(false));
    expect(state2.isLoading).toEqual(false);
  });

  test("setUser & logoutUser work", () => {
    const userLogin = {
      username: "Janne12",
      userId: "6060386fd6c2fd42d89fdf1a",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikphbm5lMTIiLCJpZCI6IjYwNjAzODZmZDZjMmZkNDJkODlmZGYxYSIsImlhdCI6MTYxNzYzNzE2MCwiZXhwIjoxNjE3NjQwNzYwfQ.6qfFY3GHR8qNdXi8Ljpvz819t_1UVAYbcRuJbwndSAc",
    };

    deepFreeze(initialUserState);
    const state1 = userReducer(initialUserState, setUser(userLogin));
    expect(state1.currentUser).toEqual(userLogin);
    expect(state1.isLogged).toEqual(true);

    deepFreeze(state1);
    const state2 = userReducer(state1, logoutUser());
    expect(state2.currentUser).toEqual({});
    expect(state2.isLogged).toEqual(false);
  });

  test("addFavourite & removeFavourite work", () => {
    const userFavourites = [
      {
        type: "activity",
        placeId: "635",
        name: "Seikkailu",
        createdAt: "Wed Mar 31 2021 21:02:46 GMT+0300 (Eastern European Summer Time)",
        user: "6060386fd6c2fd42d89fdf1a",
        id: "6064b946b20cd51de8d8d798",
      },
      {
        type: "place",
        placeId: "91",
        name: "Kauppa",
        createdAt: "Wed Mar 31 2021 21:03:29 GMT+0300 (Eastern European Summer Time)",
        user: "6060386fd6c2fd42d89fdf1a",
        id: "6064b971b20cd51de8d8d799",
      },
      {
        type: "place",
        placeId: "201",
        name: "Piha",
        createdAt: "Mon Apr 05 2021 18:49:53 GMT+0300 (Eastern European Summer Time)",
        user: "6060386fd6c2fd42d89fdf1a",
        id: "606b31a137595e0c28dc4116",
      },
      {
        type: "place",
        placeId: "193",
        name: "Hotelli",
        createdAt: "Mon Apr 05 2021 18:50:02 GMT+0300 (Eastern European Summer Time)",
        user: "6060386fd6c2fd42d89fdf1a",
        id: "606b31aa37595e0c28dc4117",
      },
    ];

    const userFavourite = {
      type: "activity",
      placeId: "422",
      name: "Juoksu",
      createdAt: "Wed Mar 31 2021 21:07:31 GMT+0300 (Eastern European Summer Time)",
      user: "6060386fd6c2fd42d89fdf1a",
      id: "6064b346b24cd51we8d3d718",
    };

    deepFreeze(initialUserState);
    const state1 = userReducer(initialUserState, setUserFavourites(userFavourites));
    expect(state1.userFavourites).toEqual(userFavourites);

    deepFreeze(state1);
    const state2 = userReducer(state1, addFavourite(userFavourite));
    expect(state2.userFavourites).toContain(userFavourite);
    expect(state2.userFavourites.length).toEqual(state1.userFavourites.length + 1);

    deepFreeze(state2);
    const state3 = userReducer(state2, removeFavourite(userFavourites[0].id));
    expect(state3.userFavourites).not.toContain(userFavourites[0]);
    expect(state3.userFavourites).toContain(userFavourites[1]);
    expect(state3.userFavourites.length).toEqual(state2.userFavourites.length - 1);
  });
});
