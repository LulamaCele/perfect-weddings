import React from "react";
import "./servicecta.css";
import { Link } from "react-router-dom";
import servicectaimg from "../../images/marc-babin.jpg";

export function ServiceCTA() {
  return (
    <div className="service-container">
      <div className="service-descrip">
        <p className="sub-title">
          <span>S</span>ervices
        </p>
        <p className="description">
          This is the only one stop you need to plan your perfect wedding. We
          got you covered from decoration, cake, make-up, dresses, suits, agian
          we got you covered.
        </p>
        <Link to="/services">
          <button className="btn-cta">View Our Services</button>
        </Link>
      </div>
      <div className="img-container-cta">
        <img src={servicectaimg} alt="" />
      </div>
    </div>
  );
}
