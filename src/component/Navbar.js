import React from "react";
import Menu from "./MenuApi";
import { Box } from "@mui/system";

function Navbar({ filterItems }) {
  const uniqueList = new Set(Menu.map((items) => items.category));
  const hasAdmin = [...uniqueList];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box className="navbar-logo">
        <img src="/images/logo.png" alt="logo" />
      </Box>
      <Box style={{ marginLeft: "auto" }}>
        {hasAdmin.map((curEle, i) => {
          return (
            <button
              key={i}
              className="btn-group__item"
              onClick={() => filterItems(curEle)}
            >
              {curEle}
            </button>
          );
        })}
        <button className="btn-group__item" onClick={() => filterItems("All")}>
          All
        </button>
      </Box>
    </Box>
  );
}

export default Navbar;
