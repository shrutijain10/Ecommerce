const initialData = require("../component/MenuApi").default;

export const cartItem = (state = initialData, action) => {
  if (action.type === "add_item") {
    return action.payload;
  }

  if (action.type === "all_item") {
    console.log(action.payload , '444444444444')
    return action.payload;


  }

  return state;
};
