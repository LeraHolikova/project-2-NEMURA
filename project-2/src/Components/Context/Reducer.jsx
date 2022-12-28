export default (state, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [action.payload, ...state.favourites],
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter((show) => {
          return show?.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
