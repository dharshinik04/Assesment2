import React, { useEffect, useState } from "react";
import { Card, NavBar } from "../../components";
import "./style.css";
import { getBrowsingData } from "../../api/browsingApi";
import { Route } from "react-router-dom";
import Mobile from "./mobile";
import Detail from "./details";
import Clothes from "./clothes";
import { Routes } from "react-router-dom";

export default function Browsing(props) {
  const [cartval, setCartval] = useState(0);

  function incrementCart() {
    setCartval(cartval + 1);
  }
  function decrementCart() {
    if (cartval > 0) {
      setCartval(cartval - 1);
    }
  }
  const [search, setSearch] = useState("");
  const [listOfObject, setlistOfObject] = useState([]);
  useEffect(() => {
    setlistOfObject(getBrowsingData());
  }, []);

  return (
    <div className="Browsing-Window">
      <NavBar sizeOfCart={cartval} onSearchChange={(val) => setSearch(val)} />
      <div className="loading-container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="Product-Window">
                {(search.length === 0
                  ? listOfObject
                  : listOfObject.filter((item) => item.item2.includes(search))
                ).map((item) => {
                  return (
                    <Card
                      itemImages={item.img}
                      itemNames={item.name}
                      itemDesc={item.details}
                      addClickAction={incrementCart}
                      removeClickAction={decrementCart}
                    />
                  );
                })}
              </div>
            }
          />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route
            path="/detail"
            element={
              <Detail
                addClickActionpart={incrementCart}
                removeClickActionpart={decrementCart}
                searching={search}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
