import React from "react";
import { Container, LogoutBtn, Logo } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => {
    return state.auth.status;
  });
  const navigate = useNavigate();
  const navItems = [];
  return <div>Header</div>;
}

export default Header;
