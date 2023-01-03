const addtocart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload }];
    case "CLEAR_CART":
      return [...action.payload];
    case "REMOVE_ITEM":
      return [...action.payload];
    case "UPDATE_ITEM":
      return [...action.payload];
    default:
      return state;
  }
};

export default addtocart;
