import React, { Fragment, useEffect, useRef, useState } from "react";
import "./loginsignup.css";
import { Link } from "react-router-dom";
import { VscLock, VscSmiley } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import Loader from "../layout/loader/Loader";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/temp.png";
import { useAlert } from "react-alert";
import { PiPhoneIncomingLight } from "react-icons/pi";

const LoginSignUp = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginPhone, setLoginPhone] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const { name, phone, password } = user;

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginPhone, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("phone", phone);
    myForm.set("password", password);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [dispatch, error, alert, navigate, isAuthenticated, redirect]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="LoginSignUpContainer">
            <Link>
              <div className="logo-container-login">
                <img src={logo} alt="gamusa" />
              </div>
            </Link>
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>SIGN UP</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form
                className="loginForm"
                ref={loginTab}
                encType="multipart/form-data"
                onSubmit={loginSubmit}
              >
                <div className="loginPhone">
                  <PiPhoneIncomingLight />
                  <input
                    type="number"
                    placeholder="Phone"
                    required
                    value={loginPhone}
                    onChange={(e) => setLoginPhone(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <VscLock />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>

                <Link to="/password/forgot">forgot password ?</Link>

                <input type="submit" value="Login" className="loginBtn" />
                <small onClick={(e) => switchTabs(e, "register")}>
                  Create a new account !
                </small>
              </form>
              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  <VscSmiley />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPhone">
                  <PiPhoneIncomingLight />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    required
                    name="phone"
                    value={phone}
                    onChange={registerDataChange}
                  />
                </div>

                <div className="signUpPassword">
                  <VscLock />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>

                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignUp;
