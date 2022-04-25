import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";
import "./product.css";
import Footer from "../core/Footer";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <Layout
      // title={product && product.name}
      // description={
      //   product && product.description && product.description.substring(0, 100)
      // }
      className=""
    >
      <div className="product-title">
        <h4 className="p-text">Book Name: {product && product.name}</h4>
        <h5 className="p-text">
          Book Description:
          {product &&
            product.description &&
            product.description.substring(0, 100)}
          <h5>Price: ${product && product.price}</h5>
        </h5>
      </div>
      <div className="row">
        <div className="col-8">
          {product && product.description && (
            <Card product={product} showViewProductButton={false} />
          )}
        </div>

        <div className="col-4">
          <div className="related-text-div">
            <h4 className="related-text">Related Books</h4>
          </div>

          {relatedProduct.map((p, i) => (
            <div className="mb-3" key={i}>
              <Card product={p} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Product;
