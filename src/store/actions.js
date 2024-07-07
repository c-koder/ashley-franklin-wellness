export const setCurrentUser = (payload) => {
  return {
    type: "SET_CURRENT_USER",
    payload: payload,
  };
};

export const setAuthLoading = (payload) => {
  return {
    type: "SET_AUTH_LOADING",
    payload: payload,
  };
};

export const setAuthError = (payload) => {
  return {
    type: "SET_AUTH_ERROR",
    payload: payload,
  };
};

export const setSiteSettings = (payload) => {
  return {
    type: "SET_SITE_SETTINGS",
    payload: payload,
  };
};

export const setSiteContent = (payload) => {
  return {
    type: "SET_SITE_CONTENT",
    payload: payload,
  };
};

export const setEditOptions = (payload) => {
  return {
    type: "SET_EDIT_OPTIONS",
    payload: payload,
  };
};
