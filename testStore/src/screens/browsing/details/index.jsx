import React, { useEffect, useState } from "react";
import { Card, ProductDetail } from "../../../components";
import { getBrowsingData } from "../../../api/browsingApi";
import "./style.css";

export default function Detail(props) {
  const { addClickActionpart, removeClickActionpart, searching } = props;

  const [listOfObject, setlistOfObject] = useState([]);
  useEffect(() => {
    setlistOfObject(getBrowsingData());
  }, []);
  return (
    <div className="product-detail">
      <ProductDetail
        title="Tshirt1"
        descrip="A T-shirt, or tee, is a style of fabric shirt named after the T shape of its body and sleeves."
        addClickAction={addClickActionpart}
        removeClickAction={removeClickActionpart}
      />
      <p>Suggestions</p>
      <div className="Product-Window">
        {(searching.length === 0
          ? listOfObject
          : listOfObject.filter((item) => item.item2.includes(searching))
        ).map((item) => {
          return (
            <Card
              itemImages={item.img}
              itemNames={item.name}
              itemDesc={item.details}
              addClickAction={addClickActionpart}
              removeClickAction={removeClickActionpart}
            />
          );
        })}
      </div>
    </div>
  );
}
