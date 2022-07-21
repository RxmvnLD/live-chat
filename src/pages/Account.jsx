import React, { useEffect } from "react";
import UserData from "../components/UserData";
import { useSelector } from "react-redux";
import Login from "../components/Login";

const Account = () => {
  const loginState = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(loginState);
  }, [loginState]);

  return <>{!loginState.logged ? <Login /> : <UserData />}</>;
};

export default Account;
