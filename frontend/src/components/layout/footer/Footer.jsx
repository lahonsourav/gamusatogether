import React from "react";
import logo from "../../../assets/gamusa.png";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="leftFooter">
          <h4>GAMUSA</h4>
          <Link to="/products/gam">gamusa</Link>
          <Link to="/products/ju">jura</Link>
          <Link to="/products/pa">pat</Link>
          <Link to="/products/muga">muga</Link>
          <Link to="/products/riha"> riha</Link>
          <Link to="/products/ahom">ahom</Link>
          <Link to="/products/mis">mising</Link>
          <Link to="/products/tr">trending</Link>
          <Link to="/products/sale">on sale</Link>
          <Link to="/products/men">men</Link>
          <Link to="/products/wom">women</Link>
          <Link to="/products">all</Link>
        </div>

        <div className="midFooter">
          <h4>GAMUSA STUFF</h4>
          <Link to="/orders">orders</Link>
          <Link to="/cart">my cart</Link>
          <Link to="/contact">help and support</Link>
          <Link to="/contact">contact us</Link>
          <Link to="/privacy">privacy policy</Link>
          <Link to="/terms">terms & conditions</Link>
          <Link to="/contact">report</Link>
        </div>

        <div className="rightFooter">
          <h4>GAMUSA SOCIAL</h4>
          <a href="#">instagram</a>
          <a href="#">facebook</a>

          <a href="#">youtube</a>
          <Link to="/about">about us</Link>
        </div>
      </div>
      <div className="logo-container-footer">
        <img src={logo} alt="gamusa" />
      </div>
      <div className="copyright"> &copy; gamusagogamukh 2023</div>
    </footer>
  );
};

export default Footer;
