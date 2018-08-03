export const UPDATE_USERNAME = 'UPDATE_USERNAME';

export const updateUsername = username => ({
  type: UPDATE_USERNAME,
  username,
});

const initialState = {
  username: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};