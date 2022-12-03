import React from "react";
import Button from "@mui/material/Button";
import { ListItems } from "./Popup";
function Cart() {
  return (
    <ListItems.Consumer>
      {(handleClick) => <Button onClick={handleClick}>Cart</Button>}
    </ListItems.Consumer>
  );
}

export default Cart;
