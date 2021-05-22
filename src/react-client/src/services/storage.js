export const setCurrentUser = (userToken) => localStorage.setItem("currentUser", JSON.stringify(userToken));

export const getCurrentUser = () => JSON.parse(localStorage.getItem("currentUser")) ?? {};

export const removeCurrentUser = () => localStorage.removeItem("currentUser");
