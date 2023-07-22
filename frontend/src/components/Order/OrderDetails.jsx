import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import Metadata from "../layout/Metadata";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";

const OrderDetails = () => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(params.id));
  }, [dispatch, alert, error, params.id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              {order && (
                <Typography component="h1">Order id : {order._id}</Typography>
              )}

              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  {order && <span>{order.user && order.user.name}</span>}
                </div>
                <div>
                  <p>Phone:</p>
                  {order && (
                    <span>
                      {order.shippingInfo && order.shippingInfo.phoneNo}
                    </span>
                  )}
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order &&
                      order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  {order && (
                    <p
                      className={
                        order.shippingInfo &&
                        order.paymentInfo.status === "succeeded"
                          ? "greenColor"
                          : "redColor"
                      }
                    >
                      {order.shippingInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "PAID"
                        : "CASH ON DELIVERY"}
                    </p>
                  )}
                </div>

                <div>
                  <p>Amount:</p>
                  <span>{order && order.totalPrice}</span>
                </div>
              </div>

              <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order &&
                  order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="orderDetailsContainerBox">
              <div>
                {order && order.orderStatus === "Delivered" ? (
                  <Link to="/return">Request order return</Link>
                ) : (
                  <p>
                    <Link to="/return">Request order cancel</Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
