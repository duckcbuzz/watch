const initialState = {
  token: sessionStorage.getItem("token") || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN": {
      console.log(action.payload);
      const token = action.payload;
      sessionStorage.setItem("token", token);

      return {
        token: token
      }
    }
    default: {
      return state;
    }
  }
}

export default authReducer;