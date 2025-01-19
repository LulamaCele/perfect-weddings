import React from "react";
import "./testimonials.css";
import { Nav } from "../../components/nav/Nav";
import { Footer } from "../../components/footer/Footer";
import img1 from "../../images/gallery-1.jpg";
import img2 from "../../images/gallery-2.jpg";
import img3 from "../../images/gallery-3.jpg";
import img4 from "../../images/gallery-4.jpg";

export function Testimonials() {
  return (
    <div className="test-wrapper">
      <Nav />
      <div className="test-container">
        <div className="test-item">
          <h2>Mike & Jessica</h2>
          <p>
          "We couldn't have asked for a better wedding service provider than Perfect Weddings. They truly went above and beyond to make our special day perfect in every way. From the stunning decor to the flawless coordination, everything was seamless and exceeded our expectations."
          </p>
        </div>
        <div className="imge-container">
          <img src={img1} alt="picture of couple" />
        </div>
      </div>
      <div className="test-container">
        <div className="imge-container" id="img-container">
          <img src={img2} alt="picture of couple" />
        </div>
        <div className="test-item" id="testimonial-item">
          <h2>Jin & Kim</h2>
          <p>
          "Choosing Perfect Weddings for our wedding was the best decision we made. Their attention to detail and professionalism was unparalleled. Our guests are still raving about how beautiful and well-organized everything was. Thank you for making our dream wedding a reality!"
          </p>
        </div>
      </div>
      <div className="test-container">
        <div className="test-item">
          <h2>Gigi & Alex</h2>
          <p>
          "I cannot recommend Perfect Weddings enough for anyone looking for a top-notch wedding service provider. They took the time to understand our vision and executed it flawlessly. Our wedding day was stress-free and absolutely magical, all thanks to their amazing team."
          </p>
        </div>
        <div className="imge-container">
          <img src={img3} alt="picture of couple" />
        </div>
      </div>
      <div className="test-container">
        <div className="imge-container" id="img-container">
          <img src={img4} alt="picture of couple" />
        </div>
        <div className="test-item" id="testimonial-item">
          <h2>Sakura & Naruto</h2>
          <p>
          "If you want a stress-free wedding planning experience, look no further than Perfect Weddings. Their team is not only incredibly talented but also a joy to work with. They took care of every little detail, allowing us to relax and enjoy every moment of our special day. Thank you for creating memories that will last a lifetime."
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
