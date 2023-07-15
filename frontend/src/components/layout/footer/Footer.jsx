import React from "react";

import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="leftFooter">
          <h4>MOKSHA</h4>
          <Link>men</Link>
          <Link>women</Link>
          <Link>kids</Link>
          <Link>shirts</Link>
          <Link>tshirts</Link>
          <Link>printed</Link>
          <Link>tracks</Link>
          <Link>shoes</Link>
          <Link>drippy</Link>
          <Link>formal</Link>
        </div>

        <div className="midFooter">
          <h4>MOKSHA STUFF</h4>
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
          <h4>MOKSHA SOCIAL</h4>
          <Link>instagram</Link>
          <Link>facebook</Link>
          <Link>mail to us</Link>
          <Link>collab with us</Link>
          <Link>become a model</Link>
        </div>
      </div>
      <div className="copyright"> &copy; Moksha 2023, all rights reserved</div>
    </footer>
  );
};

export default Footer;
