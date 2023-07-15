import React, { Fragment } from "react";
import "./header.css";

import {
  BsCartCheck,
  BsDoorClosed,
  BsFillBagHeartFill,
  BsFillPersonCheckFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { useDispatch } from "react-redux";

const UserOptions = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
    <Fragment>
      <div className="userDetails">
        <BsDoorClosed onClick={logoutUser} />

        <Link to="/admin/dashboard">
          <BsFillBagHeartFill />
        </Link>

        <Link to="/cart">
          <BsCartCheck />
        </Link>
        <Link to="/account">
          <BsFillPersonCheckFill />
        </Link>
      </div>
    </Fragment>
  );
};

export default UserOptions;
