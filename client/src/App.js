import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import DrawerAppBar from "./Layouts/Navbar";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Login from "./Layouts/Auth/Login";
import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import setAuthToken from "./util/setAuthToken";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "./routing/PrivateRoute";
import ActivityPage from "./ActivityPage/ActivityPage";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        {/* <Routes>
          <Route path="/" element={<DrawerAppBar />} />
        </Routes>
        <Routes>
          <Route path="/login-admin" element={<Login />} />
          <Routes
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes> */}
        <Routes>
          <Route path="/" element={<DrawerAppBar />} />
          <Route path="/login-admin" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/activity-page"
            element={
              <PrivateRoute>
                <ActivityPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Fragment>
    </Provider>
  );
};

export default App;
