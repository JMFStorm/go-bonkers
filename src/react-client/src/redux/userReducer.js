import {
  SET_USER_LOADING_STATE,
  SET_USER,
  LOGOUT_USER,
  SET_USER_FAVOURITES,
  ADD_USER_FAVOURITE,
  REMOVE_USER_FAVOURITE,
  SET_ERROR,
} from "./userTypes";

const initalState = {
  isLoading: false,
  currentUser: {},
  userFavourites: [],
  isLogged: false,
  error: null,
};

// eslint-disable-next-line complexity
const userReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_LOADING_STATE:
      return { ...state, isLoading: payload.isLoading };
    case SET_USER:
      return { ...state, currentUser: payload.user, isLogged: true, error: null };
    case LOGOUT_USER:
      return { ...state, currentUser: {}, isLogged: false };
    case SET_USER_FAVOURITES:
      return { ...state, userFavourites: payload.favourites };
    case ADD_USER_FAVOURITE:
      return { ...state, userFavourites: [...state.userFavourites, payload.favourite] };
    case REMOVE_USER_FAVOURITE:
      return { ...state, userFavourites: state.userFavourites.filter((f) => f.id !== payload.favouriteId) };
    case SET_ERROR:
      return { ...state, error: payload.error };
    default:
      return state;
  }
};

export default userReducer;
