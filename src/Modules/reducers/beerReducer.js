const INITIAL_STATE = {
  setLoading: false,
};

export default function beerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_BEER":
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
}
