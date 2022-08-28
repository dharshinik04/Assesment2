import React, { useState } from "react";
import "./style.css";
import Tshirt from "../../../assest/images/mainPic.webp";

export default function ProductSpecific(props) {
  const [val, setval] = useState(0);
  const {
    title = "Product Name",
    descrip = "this is the product description",
    pricing = "$123",
    addClickAction,
    removeClickAction,
  } = props;
  return (
    <div className="product-specific">
      <img src={Tshirt} alt="" className="separate-img1" />
      <img src={Tshirt} alt="" className="separate-img2" />
      <img src={Tshirt} alt="" className="separate-img3" />
      <img src={Tshirt} alt="" className="separate-full-img" />
      <div className="product-name"> {title}</div>
      <br />
      <div className="product-detail">{descrip}</div>
      <br />
      <div className="product-price">{pricing}</div>
      {val < 1 ? (
        <span
          className="item-add-cart"
          onClick={() => {
            setval(val + 1);
            addClickAction();
          }}
        >
          Add
        </span>
      ) : (
        <span className="item-cart">
          <p
            className="item-remove-button"
            onClick={() => {
              setval(val - 1);

              removeClickAction();
            }}
          >
            -
          </p>
          <p className="item-quantity">{val}</p>
          <p
            className="item-add-button"
            onClick={() => {
              setval(val + 1);
              addClickAction();
            }}
          >
            +
          </p>
        </span>
      )}
    </div>
  );
}
