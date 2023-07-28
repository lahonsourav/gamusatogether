import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Metadata from "../layout/Metadata";
import { useSelector } from "react-redux";
import Loader from "../layout/loader/Loader";
import "./profile.css";
import { logout } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import logo from "../../assets/brand.png";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`${user && user.name}'s profile`} />
          <div className="profileContainer">
            {user && isAuthenticated ? (
              <div>
                <img src={logo} alt={user.name} />
              </div>
            ) : (
              "please log in"
            )}
          </div>

          <div className="profile-details">
            <div>
              <p>{user && user.name}</p>
            </div>
            <div>
              <p>{user && user.phone}</p>
            </div>
            <div>
              {user && !user.email ? (
                <Link className="addmail" to="/me/update">
                  <p>Add email for Password Recovery</p>
                </Link>
              ) : (
                <p>{user && user.email}</p>
              )}
            </div>
          </div>

          <div className="profile-actions">
            <Link to="/cart">CART</Link>
            <Link to="/orders">ORDERS</Link>

            <Link to="/me/update">EDIT PROFILE</Link>
            <Link to="/password/change">CHANGE PASSWORD</Link>
            <p onClick={logoutUser}>LOGOUT</p>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
