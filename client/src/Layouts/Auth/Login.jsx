import React, { useState } from "react";
import { Button } from "@mui/material";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Navigate } from "react-router-dom";
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    adminEmail: "",
    password: "",
  });
  const { adminEmail, password } = formData;
  const onHandleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(adminEmail, password);
  };
  if (isAuthenticated){
    return <Navigate replace to={'/dashboard'}/>
  }
  return (
    <form onSubmit={(e)=>onSubmit(e)}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 140,
        }}
      >
        <h1 style={{ color: "white", marginBottom: 10 }}>Welcome Admin</h1>
        <h6 style={{ color: "white", marginBottom: 10, fontWeight: "lighter" }}>
          Login To Your Account
        </h6>
        <input
          type="text"
          name="adminEmail"
          placeholder="Email"
          value={adminEmail}
          onChange={(e) => onHandleChange(e)}
          style={{
            width: "50%",
            outline: "none",
            background: "none",
            borderBottomColor: "#0018a8",
            borderTop: "none",
            color: "white",
            borderLeft: "none",
            borderRight: "none",
            marginTop: 40,
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onHandleChange(e)}
          style={{
            marginTop: 20,
            width: "50%",
            outline: "none",
            background: "none",
            borderBottomColor: "#0018a8",
            borderTop: "none",
            color: "white",
            borderLeft: "none",
            borderRight: "none",
          }}
        />
        <input type="submit"/>
      </div>
    </form>
  );
};
/*map all the state from redux store to props*/
Login.propTypes = {
  login: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
