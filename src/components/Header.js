// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import "./style/header.css";
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <h1 className="title">Call a Friend</h1>
      <div className="line">
        <span className="subtitle">Your friendly contact app</span>
      </div>
    </>
  );
};

export default Header;
