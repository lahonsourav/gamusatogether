import React, { useState } from "react";

import "./header.css";

import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import UserOptions from "./UserOptions";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`, { replace: true });
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="left-head">
          <Link to="/">Gamusa</Link>
          <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input
              className="searchInput"
              type="text"
              onChange={(e) => {
                e.target.value === "women"
                  ? setKeyword("wom")
                  : setKeyword(e.target.value);
              }}
              placeholder="search..."
            />

            <Link to="#" className="searchButton" type="submit">
              <BsSearch />
            </Link>
          </form>
        </div>

        {/* <div className="mid-head"></div> */}

       
        <div className="right-head">
          {!user ? (
            <Link to="/login">
              <h4>Login / Sign up</h4>
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
