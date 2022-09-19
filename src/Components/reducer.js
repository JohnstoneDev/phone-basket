export const reducer = (state,action) => {
  if(action.type === "INCREMENT"){
    let selectedItem = action.payload;
    let newTotal = state.totalItems +1 ;
    let newGrandTotal = state.grandTotal + selectedItem.price;
    selectedItem.count++;

    return {
      ...state,
      totalItems : newTotal,
      grandTotal : newGrandTotal
    }
  }

  if(action.type === "DECREMENT"){
    let selectedItem = action.payload;

    if(selectedItem.count === 1 ){
      let newItems = state.items.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        items : newItems,
        totalItems : state.totalItems - selectedItem.count,
        grandTotal : state.grandTotal - selectedItem.price
      }

    } else {
      let newTotal = state.totalItems - 1 ;
      let newGrandTotal = state.grandTotal - selectedItem.price;

      return {
        ...state,
        totalItems : newTotal,
        grandTotal : newGrandTotal
      }

    }
  }

  if(action.type === "DELETE"){
    let selectedItem = state.items.find((item) => item.id === action.payload);
    let newItems = state.items.filter((item) => item.id !== action.payload);
    let newTotal = state.totalItems-1;
    let newGrandTotal = state.grandTotal - selectedItem.price;

    return {
      ...state,
      items : newItems,
      totalItems : newTotal,
      grandTotal : newGrandTotal
    }
  }

  if(action.type === "EMPTY_CART"){
    return {
      ...state,
      items : [],
      totalItems : 0,
      grandTotal : 0
    }
  }

  throw new Error("No Matching Action Type")
}
