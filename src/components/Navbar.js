import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="Navbar">
      <li className="items">
        <Link to="/">Lightmode</Link>
      </li>
      <li className="items">
        <Link to="/cats">Darkmode</Link>
      </li>
      <li className="items">
        <Link to="/sheeps">Language</Link>
      </li>
    </div>
  );
};
export default navbar;
