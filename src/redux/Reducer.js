const initialState = {
  auth: false,
  width: 0,
  height: 0,
  newload: true,
  newloadworkshop: true,
  
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETAUTH":
      return {
        ...state,
        auth: action.auth,
      };
    case "SETWIDTH":
      return {
        ...state,
        width: action.width,
      };
    case "SETHEIGHT":
      return {
        ...state,
        height: action.height,
      };
    case "SETNEWLOAD":
      return {
        ...state,
        newload: action.newload,
      };
    case "SETNEWLOADWORKSHOP":
      return {
        ...state,
        newloadworkshop: action.newloadworkshop,
      };
    default:
      return state;
  }
};

export default Reducer;
