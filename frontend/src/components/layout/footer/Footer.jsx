import React from "react";

import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="leftFooter">
          <h4>GAMUSA</h4>
          <Link>gamusa</Link>
          <Link>jura</Link>
          <Link>pat</Link>
          <Link>muga</Link>
          <Link>riha</Link>
          <Link>ahom</Link>
          <Link>mising</Link>
          <Link>trending</Link>
          <Link>on sale</Link>
          <Link>men</Link>
          <Link>women</Link>
          <Link>all</Link>
        </div>

        <div className="midFooter">
          <h4>GAMUSA STUFF</h4>
          <Link>orders</Link>
          <Link>wishlist</Link>
          <Link>track Order</Link>
          <Link>returns</Link>
          <Link>support</Link>
          <Link>contact us</Link>
          <Link>privacy policy</Link>
          <Link>terms & conditions</Link>
        </div>

        <div className="rightFooter">
          <h4>GAMUSA SOCIAL</h4>
          <Link>instagram</Link>
          <Link>facebook</Link>
          <Link>mail to us</Link>
          <Link>collab with us</Link>
          <Link>report a bug</Link>
          <Link>help</Link>
        </div>
      </div>
      <div className="copyright"> &copy; gamusagogamukh 2023</div>
    </footer>
  );
};

export default Footer;
