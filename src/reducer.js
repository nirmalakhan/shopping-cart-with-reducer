const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case "buy": {
      const basket = state.basket ? [...state.basket] : [];

      console.log(action);
      const existing = basket.findIndex(
        (item) => item.productId === action.payload.productId
      );

      console.log(existing);
      if (existing !== -1) {
        basket[existing].quantity = basket[existing].quantity + 1;
      } else {
        basket.push({ quantity: 1, ...action.payload });
      }
      console.log(basket);

      return { ...state, basket };
    }

    case "clearBasket": {
      return { ...state, basket: [] };
    }
    default:
      return { ...state };
  }
};

export default reducer;
