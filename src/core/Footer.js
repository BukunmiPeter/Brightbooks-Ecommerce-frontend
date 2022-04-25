import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer class="footer-container">
      <div className=" footer">
        <div class="footer-div2-big">
          <ul class="list-ul">
            <li class="list-head">COMPANY</li>
            <li class="item">About Us</li>
            <li class="item">Contact Us</li>
            <li class="item">Publishing</li>
            <li class="item">Event and News</li>
          </ul>

          <ul class="list-ul">
            <li class="list-head">NAVIGATE</li>
            <li class="item"></li>

            <li class="item">Shipping And Delivery timelines</li>
            <li class="item">Login or Register</li>
            <li class="item">SiteMap</li>
          </ul>

          <ul class="list-ul">
            <li class="list-head">CATEGORIES</li>
            <li class="item">Accounting</li>
            <li class="item">Law</li>
            <li class="item">Finance</li>
            <li class="item">Art and Culture</li>
            <li class="item">Engineering</li>
            <li class="item">Biographies</li>
            <li class="item">Music</li>
            <li class="item">Geography</li>
            <li class="item">Lots more</li>
          </ul>

          <ul class="list-ul">
            <li class="list-head">CUSTOMER SERVICE</li>
            <li class="item">Help and FAQ</li>
            <li class="item">Delivery Information</li>
            <li class="item">Payment Information</li>
            <li class="item">Terms and Condtions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
