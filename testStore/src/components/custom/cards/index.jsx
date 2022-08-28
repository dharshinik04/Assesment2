import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  let navigate = useNavigate();
  const [val, setval] = useState(0);
  const [prodspec, setprodspec] = useState([]);
  const { itemImages, itemNames, itemDesc, addClickAction, removeClickAction } =
    props;

  return (
    <div className="shop-item-container">
      <img src={itemImages} alt="" className="item-img" />
      <p
        className="item-name"
        onClick={() => {
          setprodspec(itemNames);
          navigate("/products/detail");
        }}
      >
        {itemNames}
      </p>
      <p className="item-description">{itemDesc}</p>
      {val < 1 ? (
        <span
          className="item-add-to-cart"
          onClick={() => {
            setval(val + 1);
            addClickAction();
          }}
        >
          Add
        </span>
      ) : (
        <span className="item-in-cart">
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
