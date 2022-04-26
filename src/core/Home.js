import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import "./home.css";
import Footer from "../core/Footer";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout title="" description="" className="home-layout">
      <Search />
      <div className="image-div-container">
        <div className="home-image-div">
          <div className="textbg-div">
            <h2 className="text-bg">Brightbooks.</h2>
          </div>
          <div className="text-bg-2-div">
            <h6 className="text-bg2">Your desires are well delivered here.</h6>
          </div>
        </div>
      </div>
      <div className="arrival-products">
        <div className="new-product-text-div">
          <h2 className="new-product-text">NEW PRODUCTS</h2>
        </div>

        <div className="row">
          {productsByArrival.map((product, i) => (
            <div key={i} className="col-2 mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="sold-products">
        <div>
          <h2 className="bestseller">BEST SELLERS</h2>
        </div>

        <div className="row">
          {productsBySell.map((product, i) => (
            <div key={i} className="col-2 mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Home;
