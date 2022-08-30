import "./App.css";
import React,{ useEffect } from "react";
import DrawerAppBar from "./Layouts/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Layouts/Auth/Login";
import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import setAuthToken from "./util/setAuthToken";
import { Dashboard } from "./Dasboard/Dashboard";
import PrivateRoute from "./routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrawerAppBar />} />
        <Route path="/login-admin" element={<Login />} />
        <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
