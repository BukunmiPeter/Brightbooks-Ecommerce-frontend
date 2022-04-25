import React from "react";
import Menu from "./Menu";
import "./Layout.css";
import { Footer } from "./Home";

const Layout = ({ title = "", description = "", className, children }) => (
  <div>
    <Menu />
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
