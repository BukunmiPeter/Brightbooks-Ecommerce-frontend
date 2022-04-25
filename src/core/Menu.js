import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import "./Menu.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#a89532" };
  } else {
    return { color: "black" };
  }
};

const Menu = ({ history }) => {
  let data = isAuthenticated();
  console.log(data);

  return (
    <div className="menu-container">
      <div className="nav-bar">
        <div className="logo">
          <h2>Brightbooks.</h2>
        </div>
        <div className="u-list-div">
          <ul className="u-list-menu">
            <li className="nav-item">
              <Link className="nav-link" style={isActive(history, "/")} to="/">
                <div className="home-link-div">
                  <span className="home-link">Home</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/shop")}
                to="/shop"
              >
                <FontAwesomeIcon icon={faBars} />
                <span className="shop-text">Shop</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/cart")}
                to="/cart"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="cart-text">Cart</span>

                {itemTotal()}
              </Link>
            </li>

            {isAuthenticated() && data.user.role === 0 && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive(history, "/user/dashboard")}
                  to="/user/dashboard"
                >
                  <span> Dashboard</span>
                </Link>
              </li>
            )}

            {isAuthenticated() && data.user.role === 1 && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive(history, "/admin/dashboard")}
                  to="/admin/dashboard"
                >
                  <span> Dashboard</span>
                </Link>
              </li>
            )}

            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={isActive(history, "/signin")}
                    to="/signin"
                  >
                    <span> Login</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={isActive(history, "/signup")}
                    to="/signup"
                  >
                    <span> Register</span>
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && (
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer", color: "black" }}
                  onClick={() =>
                    signout(() => {
                      history.push("/");
                    })
                  }
                >
                  <span>Logout</span>
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Menu);
