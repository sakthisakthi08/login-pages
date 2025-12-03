import React from "react";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#eef1f6",
        fontFamily: "Poppins",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "40px" }}>🎉 Login Successful!</h1>
      <p style={{ color: "#555", fontSize: "20px" }}>
        Welcome, Sakthi! You are now logged in.
      </p>
    </div>
  );
}

export default Home;
