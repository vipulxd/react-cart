import React from "react";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
function Auth() {
  const user = localStorage.getItem("user");
  console.log(user);
  return <div>{user ? <Login /> : <SignUp />}</div>;
}

export default Auth;
