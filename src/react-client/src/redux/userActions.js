import {
  SET_USER_LOADING_STATE,
  SET_USER,
  LOGOUT_USER,
  SET_USER_FAVOURITES,
  ADD_USER_FAVOURITE,
  REMOVE_USER_FAVOURITE,
  SET_ERROR,
} from "./userTypes";
import {
  deleteFavourite,
  fetchUserFavourites,
  postAddFavourite,
  postLoginRequest,
  postRegisterRequest,
} from "../services/api";
import { setCurrentUser } from "../services/storage";

// Set user favourites
export const setUserFavourites = (favourites) => {
  return {
    type: SET_USER_FAVOURITES,
    payload: {
      favourites,
    },
  };
};

// Set loading
export const setLoadingState = (isLoading) => {
  return {
    type: SET_USER_LOADING_STATE,
    payload: {
      isLoading,
    },
  };
};

// Login user
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: {
      user,
    },
  };
};

// Set error
export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: {
      error,
    },
  };
};

// Register user
export const registerUser = (userCreds) => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));

    const userRegister = await postRegisterRequest(userCreds);

    if (userRegister.errors) {
      dispatch(setError("Käyttäjätunnus on jo käytössä"));
      dispatch(setLoadingState(false));
      return;
    }

    const userLogin = await postLoginRequest(userCreds);
    dispatch(setLoadingState(false));
    userLogin ? dispatch(setUser(userLogin)) : null;
    setCurrentUser(userLogin);
    dispatch(setUserFavourites([]));
  };
};

// Login user process
export const loginUser = (userCreds) => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    const userLogin = await postLoginRequest(userCreds);

    if (userLogin.errors) {
      dispatch(setError("Väärä käyttäjätunnus tai salasana"));
      dispatch(setLoadingState(false));
      return;
    }

    dispatch(setLoadingState(false));
    userLogin ? dispatch(setUser(userLogin)) : null;
    setCurrentUser(userLogin);
    const favourites = await fetchUserFavourites(userLogin.userId);
    favourites.data ? dispatch(setUserFavourites(favourites.data)) : null;
  };
};

//Logout user
export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

// Add favourite
export const addFavourite = (favourite) => {
  return {
    type: ADD_USER_FAVOURITE,
    payload: {
      favourite,
    },
  };
};

// Init add favourite
export const sendAddFavourite = (favourite) => {
  return async (dispatch) => {
    const favouriteResponse = await postAddFavourite(favourite);
    dispatch(addFavourite(favouriteResponse));
  };
};

// Remove favourite
export const removeFavourite = (favouriteId) => {
  return {
    type: REMOVE_USER_FAVOURITE,
    payload: {
      favouriteId,
    },
  };
};

// Init remove favourite
export const sendRemoveFavourite = (favouriteId) => {
  return async (dispatch) => {
    await deleteFavourite(favouriteId);
    dispatch(removeFavourite(favouriteId));
  };
};
