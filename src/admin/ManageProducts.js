import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";
import "./managebooks.css";
import Footer from "../core/Footer";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const destroy = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout className="">
      <div className="row">
        <div className=" col-12 ">
          <div className="total-books">
            <h2 className="text-center">Total Books: {products.length}</h2>
          </div>

          <hr />
          <ol className="list-group container-list">
            {products.map((p, i) => (
              <li key={i}>
                <strong>{p.name}</strong>

                <div className="update-delete-btn-div">
                  <Link to={`/admin/product/update/${p._id}`}>
                    <p>Update</p>
                  </Link>
                  <span className="delete-btn" onClick={() => destroy(p._id)}>
                    Delete
                  </span>
                </div>
              </li>
            ))}
          </ol>
          <br />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default ManageProducts;
