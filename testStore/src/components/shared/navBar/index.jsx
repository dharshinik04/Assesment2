import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import cart from "../../../assest/images/cart.svg";
import profile from "../../../assest/images/profile.svg";
export default function NavBar(props) {
  let navigate = useNavigate();

  const { sizeOfCart = 0 } = props;

  return (
    <div className="NavBar-container">
      <p className="NavBar-title" onClick={() => navigate("/products/")}>
        Test Store
      </p>
      <input type="search" placeholder="Search Product" className="input" />
      <p onClick={() => navigate("/products/mobile")}>Mobile</p>
      <p onClick={() => navigate("/products/clothes")}>clothes</p>
      <div className="NavBar-right">
        <span className="icon-container">
          <img src={cart} className="NavBar-icon" alt="cart" />
          {sizeOfCart > 0 && (
            <p className="NavBar-icon-tooltip">{sizeOfCart}</p>
          )}
        </span>
        <img
          src={profile}
          alt=""
          className="NavBar-img"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}
