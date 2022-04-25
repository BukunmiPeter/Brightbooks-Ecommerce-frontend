import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./cartHelpers";

import "./card.css";

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f,
  run = undefined,
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="viewproduct-link">
          <button className="viewproduct-btn">View Product</button>
        </Link>
      )
    );
  };

  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="addtocart-btn">
          Add to cart
        </button>
      )
    );
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock </span>
    );
  };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div className="adjust-btninput--div">
          <span className="adjquan-text">Adjust Quantity</span>

          <input
            type="number"
            className="adjust-input"
            value={count}
            onChange={handleChange(product._id)}
          />
        </div>
      )
    );
  };
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="removeproduct-btn"
        >
          Remove Book
        </button>
      )
    );
  };
  return (
    <div className="card ">
      <div className="card-bodyy">
        {shouldRedirect(redirect)}
        <div className="image-card-div">
          <ShowImage item={product} url="product" />
        </div>
        <div className="card-info">
          <div className="item-name">{product.name}</div>
          {/* <p className="card-text">{product.description.substring(0, 100)} </p> */}
          <p className="card-text">$ {product.price}</p>
          {/* <p className="card-text">
            Category: {product.category && product.category.name}
          </p> */}
          {/* <p className="car-text">
            Added on {moment(product.createdAt).fromNow()}
          </p> */}
          {showStock(product.quantity)}
          {showViewButton(showViewProductButton)}

          {showAddToCartBtn(showAddToCartButton)}
        </div>
        {showCartUpdateOptions(cartUpdate)}
        {showRemoveButton(showRemoveProductButton)}
      </div>
    </div>
  );
};

export default Card;
