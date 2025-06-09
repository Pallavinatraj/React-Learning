import React from "react";
import Img from "../assets/OIP.jpeg";
import { useNavigate, NavLink } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <img src={Img} alt="React Router" />
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="/product">
            <li>Product</li>
          </NavLink>
        </ul>

        <button onClick={() => navigate("/about")}>Get Started</button>
      </div>
    </>
  );
}

export default Navbar;
