import React from "react";
import { Route, Navigate, Routes, Outlet, useLocation } from "react-router-dom";
import propTypes, { element } from "prop-types";
import { connect } from "react-redux";
const PrivateRoute = ({ auth: { isAuthenticated },children }) => {
    const token = localStorage.getItem('token')
    return  token ? children : <Navigate to="/login-admin" />;
};

PrivateRoute.propTypes = {
  auth: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  //We are passing whole state in the props so mapstatetoprops
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute); //connect redux with the actions we created
