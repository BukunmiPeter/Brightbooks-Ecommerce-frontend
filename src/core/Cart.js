import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card from "./Card";
import Checkout from "./Checkout";
import Footer from "./Footer";
import "./cart.css";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div>
        <div>
          <h2 className="cart-item-text">
            You have {`${items.length}`} items in your cart
          </h2>
        </div>

        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h4>
      Your cart is empty. <Link to="/shop">Continue shopping.</Link>
    </h4>
  );

  return (
    <Layout className="container-fluid">
      <div className=" row">
        <div className=" cart-item-container  col-6">
          <div className="cart-status-div">
            <h2 className="cart-status">Cart status</h2>
          </div>
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>

        <div className="col-6">
          <div className="cart-summary-text-div">
            <h2 className=" cart-summary-text mb-4">Your cart summary</h2>
          </div>

          <hr />
          <Checkout products={items} setRun={setRun} run={run} />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Cart;
