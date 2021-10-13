const loggedReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "SIGN_OUT":
      return {};
    default:
      return state;
  }
};

export default loggedReducer