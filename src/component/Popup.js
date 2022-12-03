import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import Cart from "./Cart";
export const ListItems = React.createContext();
function Popup({ Items, menuData }) {
  console.log(Items,"dfkdlfjdkljg");
  console.log(Items.length-1, "testing");
  // var totalsum = Items;
  // var sum = totalsum.reduce(function (a, b) {
  //   return a + b;
  // }, 0);
  // console.log("sum",sum);
  // console.log("Items", Items);
  const [anchorEl, setAnchorEl] = useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <ListItems.Provider value={handleClick}>
        <Cart />
      </ListItems.Provider>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className="popup"
      >
        <Box component="div" sx={{ p: 2 }} className="popup-cart">
        <Typography>
              {" "}
              Total Quantity of item is :  {Items.length}
            </Typography>
          {Items.map((itemData, i) => {
          
            {/* console.log(Items,"6666666") */ }
            return (
              <Link to="/basket" key={i}>
                <Box className="popup-items" mb="20px">
                  <Grid container>
                    <Grid item xs={4}>
                      <img
                        src={itemData.image}
                        alt="images"
                        className="card-media"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography component="h4" variant="h4">
                        {itemData.name}
                      </Typography>
                      <Typography component="p">
                        {itemData.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Popover>
    </>
  );
}

export default Popup;
