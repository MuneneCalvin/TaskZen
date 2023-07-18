interface State {
    user: any;
  }
  
  type Action =
    | { type: "LOGIN_SUCCESS"; payload: any }
    | { type: "LOGIN_FAILURE" }
    | { type: "LOGOUT" };
  
  const Reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
        };
      case "LOGIN_FAILURE":
      case "LOGOUT":
        return {
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  