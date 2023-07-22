import React from "react";
import "./request.css";
import { useAlert } from "react-alert";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Request = () => {
  const { order } = useSelector((state) => state.orderDetails);
  const alert = useAlert();
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qtzcc3k",
        "template_2mit4i9",
        form.current,
        "kAGHUYRfuz5_dnP20"
      )
      .then(
        (result) => {
          alert.success("Request sent, we'll contact you soon");
        },
        (error) => {
          alert.error("something went wrong, try again");
        }
      );

    e.target.reset();
    navigate(-1);
  };
  return (
    <div className="sell">
      <div className="sell__container">
        <h3 className="about__line"> Request form</h3>
        <form ref={form} onSubmit={sendEmail}>
          <textarea
            name="orderId"
            rows="1"
            value={order._id}
            required
            readonly
          ></textarea>

          <textarea
            name="message"
            rows="10"
            placeholder="Reason of Cancelation"
            required
          ></textarea>

          <button type="submit" className="btn-primary">
            Send a request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Request;
