import React, { useState } from "react";

import "./header.css";
import logo from "../../../assets/logo.png";

import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import UserOptions from "./UserOptions";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    console.log("ok");
    if (keyword.trim()) {
      navigate(`/products/${keyword}`, { replace: true });
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="left-head">
          <Link to="/">
            <div className="logo-container">
              <img src={logo} alt="Gamusa" />
            </div>
          </Link>

          <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input
              className="searchInput"
              type="text"
              onChange={(e) => {
                e.target.value === "women" || e.target.value === "woman"
                  ? setKeyword("girl")
                  : setKeyword(e.target.value);
              }}
              placeholder="search..."
            />

            <button className="searchButton" type="submit">
              <BsSearch />
            </button>
          </form>
        </div>

        <div className="right-head">
          {!user ? (
            <Link to="/login">
              <h4>Login</h4>
            </Link>
          ) : (
            <UserOptions />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
