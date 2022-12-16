import { useDispatch } from "react-redux";

const products = [
  {
    productId: "BE8290004",
    name: "Ski boots",
    description: "Mondo 26.5. White.",
    price: 698.62,
  },
  {
    productId: "PC6310098",
    name: "Snowboard boots",
    description: "Mondo 27.5. Blue.",
    price: 825.59,
  },
  {
    productId: "RR5430103",
    name: "Mountaineering boots",
    description: "Mondo 27.3. Brown.",
    price: 634.98,
  },
];

const Boots = () => {
  const dispatch = useDispatch();

  return (
    <div className="Boots">
      <h1>Boots</h1>

      <div className="Boots-product">
        {products.map((product) => (
          <div key={products.productid}>
            <div id="data">
              <ul>
                <li>Id={product.productId}</li>
                <li>Title={product.name}</li>
                <li>Price={product.description}</li>
                <li>Category={product.price}</li>
              </ul>
              <button
                onClick={() => dispatch({ type: "buy", payload: product })}
              >
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boots;
