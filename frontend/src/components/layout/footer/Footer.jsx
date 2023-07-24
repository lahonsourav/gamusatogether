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
          <Link to="/products/gam">Gamusa</Link>
          <Link to="/products/ju">Jura</Link>
          <Link to="/products/pa">Paat</Link>
          <Link to="/products/muga">Muga</Link>
          <Link to="/products/riha"> Riha</Link>
          <Link to="/products/ahom">Ahom</Link>
          <Link to="/products/mis">Msing</Link>
          <Link to="/products/tr">Trending</Link>
          <Link to="/products/sale">Sale</Link>
          <Link to="/products/men">Men</Link>
          <Link to="/products/wom">Women</Link>
          <Link to="/products">All</Link>
        </div>

        <div className="midFooter">
          <h4>GAMUSA STUFF</h4>
          <Link to="/orders">Orders</Link>
          <Link to="/cart">My Cart</Link>
          <Link to="/contact">Help and Support</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/contact">Report</Link>
        </div>

        <div className="rightFooter">
          <h4>GAMUSA SOCIAL</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>

          <a href="#">Youtube</a>
          <Link to="/about">About us</Link>
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
