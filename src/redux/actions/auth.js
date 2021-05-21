import axios from 'axios';
import { toast } from "react-toastify";

export const sendPostLogin = (payload) => {
  return async (dispatch) => {
    return axios.post('https://shopwatchdut.herokuapp.com/api/user/login', JSON.stringify(payload), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    })
      .then(response => {
        console.log(response.data.token)
        dispatch({
          type: "SET_LOGIN",
          payload: response.data.token
        })
        toast.success("Login success.")
      })
      .catch(error => {
        toast.error("Username or password is not correct.")
        throw (error);
      });
  };
};
