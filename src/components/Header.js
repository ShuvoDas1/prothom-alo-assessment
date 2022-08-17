import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1 className="logo" onClick={() => navigate("/", { replace: true })}>
        Protom Alo
      </h1>
    </div>
  );
};

export default Header;
