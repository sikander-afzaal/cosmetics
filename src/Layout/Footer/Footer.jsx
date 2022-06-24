import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <div className="col-footer">
        <h1>About Us</h1>
        <a href="...">Welcome Here</a>
        <a href="...">About Us</a>
        <a href="...">About Us</a>
        <a href="...">About Us</a>
      </div>
      <div className="col-footer">
        <h1>Lorem</h1>
        <a href="...">New Collection</a>
        <a href="...">Lorem, ipsum.</a>
        <a href="...">Lorem, ipsum.</a>
        <a href="...">Lorem, ipsum.</a>
      </div>
      <div className="col-footer">
        <h1>Lorem</h1>
        <a href="...">Terms And Conditions</a>
        <a href="...">arice Guarantee</a>
        <a href="...">aayment</a>
        <a href="...">Material And Care</a>
      </div>
      <div className="col-footer">
        <h1>Lorem</h1>
        <a href="...">About Us</a>
        <a href="...">About Us</a>
        <div className="box-div">
          <a href="...">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="...">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="...">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
