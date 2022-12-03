import React, { useState } from "react";
import Menu from "./MenuApi";
import { Box } from "@mui/system";
import Navbar from "./Navbar";
import Popup from "./Popup";
import "../component/style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function MenuCard() {
  const [extraText, setExtraText] = useState(false);
  const menuData = useSelector((state) => state);
  const Items = useSelector( (state)=>[state-1])
  // const [Items, setItems] = useState([])
  const dispatch = useDispatch();


  const setCart = (id) => {
    
    let newData = Items;
    let TemplateList = menuData.cartItem[id];
    newData.push(TemplateList);
    console.log(newData,"newdata")

  };

  const filterItem = (category) => {
    if (category === "All") {
      dispatch({ type: "all_item", payload: Menu });
      return;
    }
    const updateList = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    dispatch({ type: "add_item", payload: updateList });
  };

  const extraContent = (
    <span className="card-description-new">
      This is for only testing purpose
    </span>
  );
  const linkName = extraText ? "Read" : "Read";

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="navbar"
      >
        <Navbar filterItems={filterItem} />
        <Popup  Items={Items} menuData={menuData} />

      </Box>
      {/* <Link to="/product"> */}
      <section className="main-card-container">
        {menuData.cartItem.map((curEle, i) => {
          return (
            <div className="card-container" key={i}>
              <div className="card">
                <div className="card-body">
                  <span className="card-circle">{curEle.id}</span>
                  <span className="card-author"> {curEle.category}</span>
                  <h2 className="card-title"> {curEle.name} </h2>
                  <span className="card-description">
                    {curEle.description}
                    {extraText && extraContent}
                  </span>
                  <div className="card-read">
                    <button
                      className="read-more-link"
                      onClick={() => {
                        setExtraText(!extraText);
                      }}
                    >
                      {linkName}
                    </button>
                  </div>
                </div>
                <img src={curEle.image} alt="images" className="card-media" />
                <button
                  onClick={() => {
                    setCart(curEle.id);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </section>
      {/* </Link> */}
    </>
  );
}

export default MenuCard;
