import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import "./home.css";
import Footer from "../core/Footer";
// import "bootstrap/dist/css/bootstrap.css";
// import Carousel from "react-bootstrap/Carousel";

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

  // const Carousel = () => {
  //   return (
  //     <div style={{ display: "block", width: 700, padding: 30 }}>
  //       <h4>React-Bootstrap Carousel Component</h4>
  //       <Carousel>
  //         <Carousel.Item interval={1500}>
  //           <img
  //             className="d-block w-100"
  //             src="/bookstoreimages/carousel1.jpg"
  //             alt="Image One"
  //           />
  //           <Carousel.Caption>
  //             {/* <h3>Label for first slide</h3>
  //             <p>Sample Text for Image One</p> */}
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //         <Carousel.Item interval={500}>
  //           <img
  //             className="d-block w-100"
  //             src="/bookstoreimages/carousel2.jpg"
  //             alt="Image Two"
  //           />
  //           <Carousel.Caption>
  //             {/* <h3>Label for second slide</h3>
  //             <p>Sample Text for Image Two</p> */}
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //       </Carousel>
  //     </div>
  //   );
  // };

  return (
    <Layout title="" description="" className="home-layout">
      <Search />
      {/* <Carousel /> */}
      <div className="image-div-container">
        <div className="home-image-div">
          <h2 className="text-bg">Brightbooks.</h2>
          <h6 className="text-bg2">Your desires are well delivered here.</h6>
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
