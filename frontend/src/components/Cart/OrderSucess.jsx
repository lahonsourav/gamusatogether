import React from "react";
import { VscPass } from "react-icons/vsc";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <VscPass />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
      <Link to="/products">Shop More</Link>
    </div>
  );
};

export default OrderSuccess;
