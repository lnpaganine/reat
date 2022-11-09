import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="navButton">
        Home
      </Link>{" "}
      <Link to="/about" className="navButton">
        About
      </Link>{" "}
      <Link to="/register" className="navButton">
        Register
      </Link>{" "}
      <Link to="/signin" className="navButton">
        Sign In
      </Link>{" "}
      <Link to="/restaurants" className="navButton">
        Restaurants
      </Link>{" "}
      <Link to="/food" className="navButton">
        Food
      </Link>{" "}
      <Link to="/cart" className="navButton">
        Shopping cart
      </Link>{" "}
    </div>
  );
};

export default Navbar;
