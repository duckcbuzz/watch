import axios from 'axios';

export const getListProduct = () => {
  return async (dispatch) => {
    return axios.get('https://shopwatchdut.herokuapp.com/api/product/')
      .then(response => {
        const data = response.data.data;
        dispatch({
          type: "SET_PRODUCT",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const getDetailProduct = (payload) => {
  return async (dispatch) => {
    return axios.get(`https://shopwatchdut.herokuapp.com/api/product/${payload}`)
    .then(response => {
      const data = response.data.data;
      dispatch({
        type: "SET_DETAIL_PRODUCT",
        payload: data
      })
    })
    .catch(error => {
      throw (error);
    });
  }
}