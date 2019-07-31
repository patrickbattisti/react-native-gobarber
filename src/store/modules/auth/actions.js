export const signInRequest = (email, password) => {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password,
    },
  };
};

export const signInSuccess = (token, user) => {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      token,
      user,
    },
  };
};

export const signUpRequest = (name, email, password) => {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      password,
    },
  };
};

export const signFailure = () => {
  return {
    type: '@auth/SIGN_FAILURE',
  };
};

export const signOut = () => {
  return {
    type: '@auth/SIGN_OUT',
  };
};
