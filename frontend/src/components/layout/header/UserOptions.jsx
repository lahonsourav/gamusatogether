import React, { Fragment } from "react";
import "./header.css";

import { BsBag } from "react-icons/bs";

import { VscAccount, VscVmOutline } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const UserOptions = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Fragment>
      <div className="right-head">
        {user && user.role === "admin" ? (
          <div className="userDetails">
            <Link to="/admin/dashboard">
              <VscVmOutline />
            </Link>
            <Link to="/cart">
              <BsBag />
            </Link>
            <Link to="/account">
              <VscAccount />
            </Link>
          </div>
        ) : (
          <div className="userDetails">
            <Link to="/cart">
              <BsBag />
            </Link>
            <Link to="/account">
              <VscAccount />
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default UserOptions;
