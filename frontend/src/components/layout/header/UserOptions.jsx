import React, { Fragment } from "react";
import "./header.css";

import { VscAccount, VscVmOutline, VscHeart } from "react-icons/vsc";
import { Link } from "react-router-dom";

const UserOptions = () => {
  return (
    <Fragment>
      <div className="userDetails">
        <Link to="/admin/dashboard">
          <VscVmOutline />
        </Link>

        <Link to="/cart">
          <VscHeart />
        </Link>
        <Link to="/account">
          <VscAccount />
        </Link>
      </div>
    </Fragment>
  );
};

export default UserOptions;
