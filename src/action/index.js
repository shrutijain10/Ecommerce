export const itemUpdate = () => {
  return {
    type: "add_item",
    payload: updateList,
  };
};

export const allUpdate = () =>{
  return {
    type : "all_item",
    payload : Menu
  }
}


