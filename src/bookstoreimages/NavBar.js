import React from "react";
import "../Navcomponent/NavBar.css";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
function NavBar() {
  return (
    <div>
      <div className="NavItemcontainer">
        <div className="navbarItems">
        <div className="navLogo">
              <strong>CUTE.</strong>
            </div>
          <div className="submenucontainer">
            
            <div className="navmene">
              <div className="home">Home</div>
              <div className="home">Product</div>
              <div className="home">About us</div>
              <div className="home">Contact</div>
              <div className="loginButton">
                <button>Login</button>
              </div>
              <div className="chaticon">
                <FiShoppingCart />
              </div>
              <div className="menuicons">
                <HiMenuAlt3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
