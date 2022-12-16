import { useSelector, useDispatch } from "react-redux";

const Basket = () => {
  const basket = useSelector((state) => state.basket);
  console.log("Basket", basket);
  const dispatch = useDispatch();

  return (
    <div className="Basket">
      <h2>Basket</h2>
      {basket && basket.length ? (
        <>
          {basket.map((item) => (
            <div key={item.productId}>
              <div className="Basket-itemName">{item.name}</div>
              <div className="Basket-itemProductId">{item.productId}</div>
              <div className="Basket-itemPricing">
                <div className="Basket-itemQuantity">{item.quantity}</div>
                <div className="Basket-itemPrice">{item.price}</div>
              </div>
            </div>
          ))}
          <button onClick={() => dispatch({ type: "clearBasket" })}>
            Clear
          </button>
        </>
      ) : (
        "Empty"
      )}
    </div>
  );
};

export default Basket;
