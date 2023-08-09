import React from "react";
import logo from "../../../assets/gamusa.png";
import "./footer.css";
import { Link } from "react-router-dom";
import Whats from "../Whats";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="leftFooter">
          <h4>GAMUSA</h4>
          <Link to="/products/pa">Paat</Link>
          <Link to="/products/muga">Muga</Link>
          <Link to="/products/ahom">Ahom</Link>
          <Link to="/products/mis">Mising</Link>

          <Link to="/products/men">Men</Link>
          <Link to="/products/wom">Women</Link>
        </div>

        <div className="midFooter">
          <h4>GAMUSA STUFF</h4>
          <Link to="/cart">My Cart</Link>
          <Link to="/contact">Help and Support</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/contact">Become a Seller</Link>
        </div>

        <div className="rightFooter">
          <h4>GAMUSA SOCIAL</h4>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100066812676876"
          >
            Instagram
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100066812676876"
          >
            Facebook
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@gamusagugamukh2751"
          >
            Youtube
          </a>
          <Link to="/about">About us</Link>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/+916000601557"
          >
            Custom Design
          </a>{" "}
          <Link to="/about">Legal</Link>
        </div>
      </div>
      <div className="logo-container-footer">
        <img src={logo} alt="gamusa" />
      </div>
      <div className="copyright">
        <Whats />

        <small>&copy; gamusagogamukh 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
