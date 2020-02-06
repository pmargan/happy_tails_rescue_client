import React from "react";
import { Route } from "react-router-dom"
import JWT from 'jsonwebtoken'

export default function PrivateRoute(props) {

  const verifyToken = () => {
    let authToken = localStorage.getItem("authToken")
    if (authToken) {
    let decoded = JWT.decode(authToken)
    console.log(decoded)
      if (decoded && decoded._id) {
        return true
      } else {
        localStorage.removeItem("authToken")
        return false
      }
    } else {
      return false
    }
  }
  return (
    verifyToken() ? (
      <Route {...props} >{props.children}</Route>
    ) : (
      <>
        {props.redirect("/login")}
      </>
    )
  )
}