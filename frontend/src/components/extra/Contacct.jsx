import React from "react";
import "./terms.css";
import { BiMailSend } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Contacct = () => {
  return (
    <div className="terms_container">
      <p>
        Reach us <br />
        <br />
        <br /> 1. For Delivery, Return, Payment issues: <br />
        <br /> <FiPhoneCall className="contact_icon" />
        <a href="tel:+919101118705">call now</a>
        <br />
        <BiMailSend className="contact_icon" />{" "}
        <a
          href="mailto:gamusagogamukh@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          send mail
        </a>
        <br />
        <BsWhatsapp className="contact_icon" />
        <a href="https://wa.me/+919101118705" target="_blank" rel="noreferrer">
          whatsapp
        </a>
        <br />
        <br />
        <br /> 2. For Products, Damage and other product related issues: <br />
        <br /> <FiPhoneCall className="contact_icon" />
        <a href="tel:+916000601557">call now</a>
        <br />
        <BiMailSend className="contact_icon" />{" "}
        <a
          href="mailto:gamusagogamukh@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          send mail
        </a>
        <br />
        <BsWhatsapp className="contact_icon" />
        <a href="https://wa.me/+916000601557" target="_blank" rel="noreferrer">
          whatsapp
        </a>
        <br />
        <br />
        <br />
        <br /> 3. For Account, Password, request account delete and other
        account related issues: <br />
        <br /> <FiPhoneCall className="contact_icon" />
        <a href="tel:+916001098923">call now</a>
        <br />
        <BiMailSend className="contact_icon" />{" "}
        <a href="mailto:lahoncs@gmail.com" target="_blank" rel="noreferrer">
          send mail
        </a>
        <br />
        <BsWhatsapp className="contact_icon" />
        <a href="https://wa.me/+916001098923" target="_blank" rel="noreferrer">
          whatsapp
        </a>
      </p>
    </div>
  );
};

export default Contacct;
