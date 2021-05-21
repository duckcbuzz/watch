import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import SignIn from "../components/SignIn";
import { sendPostLogin } from "../redux/actions/auth";

export default function SignInPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if(token) {
      history.push('/');
    }
  }, [token])

  const handleSubmitLogin = (payload) => {
    dispatch(sendPostLogin({
      username: payload.email,
      password: payload.password,
    }))
  }

  return <SignIn handleSubmitLogin={handleSubmitLogin}/>;
}
