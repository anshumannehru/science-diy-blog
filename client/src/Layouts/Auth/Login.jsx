import React from "react";
import { Button } from "@mui/material";
export const Login = () => {
  return (
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
      <Button style={{ marginTop: 30, width: "20%" }} variant="outlined">
        Login
      </Button>
    </div>
  );
};
