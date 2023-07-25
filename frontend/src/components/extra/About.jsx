import React from "react";
import "./terms.css";
import { BiMailSend } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { PiGlobeHemisphereWestThin } from "react-icons/pi";
const About = () => {
  return (
    <div className="terms_container">
      <p>
        <br />
        <br />
        About Gamusa Gogamukh <br />
        <br /> Gamusa Gogamukh is a business originated from Gogamukh, Dhemaji,
        Assam, India. From our site you can buy all kinds of Assamese
        Traditional Attire. We provide high quality and home made material. Our
        offline store is situated in Gogamukh town, Dhemaji, Assam. We deliver
        products all over India with minimal delivery charge.
        <br />
        <br />
        <br />
        <br />
        <br />
        About the Website <br />
        <br />
        This website is created by Lahon. All rights reserved. For any kind of
        copyright issue, technical issue, deals etc, Contact the developer by
        clicking the follwing links:
        <br />
        <br />
        <PiGlobeHemisphereWestThin className="contact_icon" />
        <a href="https://lahon.in" target="_blank" rel="noreferrer">
          Visit the developer's site
        </a>
        <br />
        <br /> <FiPhoneCall className="contact_icon" />
        <a href="tel:+916001098923">Call the developer</a>
        <br />
        <br />
        <BiMailSend className="contact_icon" />{" "}
        <a href="mailto:lahoncs@gmail.com" target="_blank" rel="noreferrer">
          Send mail to the developer
        </a>
        <br />
        <br />
        <BsWhatsapp className="contact_icon" />
        <a href="https://wa.me/+916001098923" target="_blank" rel="noreferrer">
          Whatsapp message to the developer
        </a>
      </p>
    </div>
  );
};

export default About;
