import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import { FaCartArrowDown } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Hero from "./Home";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

function Header() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <header className="py-3 fixed-top" style={{zIndex:10}}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to="/" className="navBar-brand">
                <img src={logo} style={{ width: "100px", height: "40px" }} />
              </Link>
            </div>
            <div className="icon">
            <button className="text-dark nav-link" onClick={handleCartIconClick}>
                <FaCartArrowDown className="fs-4" />
              </button>
              <p className="circle">{cart.length}</p>
            </div>
          </div>
        </div>
      </header>
      {isCartOpen && <Cart />}
    </>
  );
}

export default Header;
