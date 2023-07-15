import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Metadata from "../layout/Metadata";
import { useSelector } from "react-redux";
import Loader from "../layout/loader/Loader";
import "./profile.css";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();

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
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
          </div>

          <div>
            <div>
              <h4>Full name</h4>
              <p>{user && user.name}</p>
            </div>

            <div>
              <h4>email</h4>
              <p>{user && user.email}</p>
            </div>

            <Link to="/orders">My Orders</Link>
            <Link to="/password/change">Change Password</Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
