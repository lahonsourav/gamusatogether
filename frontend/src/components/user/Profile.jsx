import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Metadata from "../layout/Metadata";
import { useSelector } from "react-redux";
import Loader from "../layout/loader/Loader";
import "./profile.css";
import { logout } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import { VscRedo } from "react-icons/vsc";
import { useAlert } from "react-alert";

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
                <img src={user && user.avatar.url} alt={user.name} />
              </div>
            ) : (
              "please log in"
            )}

            <div className="profile-details">
              
                <div>
                  <h4>Name</h4>
                  <p>{user && user.name}</p>
                </div>

                <div>
                  <h4>email</h4>
                  <p>{user && user.email}</p>
                </div>

                <Link to="/orders">My Orders</Link>
                <Link to="/password/change">Change Password</Link>
                <VscRedo onClick={logoutUser} />
            
            </div>
            <Link to="/me/update">Edit Profile</Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
