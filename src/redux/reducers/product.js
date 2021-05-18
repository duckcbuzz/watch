const initialState = {
  listProduct: [],
  detailProduct: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT": {
      return {
        ...state,
        listProduct: action.payload,
      }
    }
    case "SET_DETAIL_PRODUCT": {
      return {
        ...state,
        detailProduct: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export default productReducer;