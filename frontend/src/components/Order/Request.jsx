import React from "react";
import "./request.css";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";

const Request = () => {
  const { order } = useSelector((state) => state.orderDetails);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pb9vrqw",
        "template_71kwt7v",
        form.current,
        "0RwgMGfnVh-mwKq1J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="sell">
      <div className="sell__container">
        <h3 className="about__line"> Cancel Order</h3>
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
            Request Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Request;
