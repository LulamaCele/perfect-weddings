import React from "react";
import "./gallery.css";
import { Link } from "react-router-dom";
import galleryctaimg from "../../images/allison-heine-unsplash.jpg";

export function GalleryCTA() {
  return (
    <div className="gallery-container-cta">
      <div className="img-container-cta" id="img-container">
        <img src={galleryctaimg} alt="" />
      </div>
      <div className="gallery-descrip" id="gallery-descrip">
        <p className="sub-title">
          <span>G</span>allery
        </p>
        <p className="description">
          Take a look at our amazing newly wed couples and picture yourself on your special day looking as amazing as they do.
          Guess what we can make it happen for you too.
        </p>
        <Link to='/gallery'>        <button className="btn-cta">View Our Gallery</button></Link>
      </div>
    </div>
  );
}
