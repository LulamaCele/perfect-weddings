import React from 'react';
import './testimonialsCTA.css';
import { Link } from 'react-router-dom';
import testictaimg from '../../images/pexels-carsten-vollrath-13381459.jpg';

export function TestimonialsCTA() {
  return (
    <div className='testimonialcta-container'>
            <div className="testimonial-descrip">
                <p className='sub-title'><span>T</span>estimonials</p>
                <p className='description'>
                   I was so impressed with perfect weddings, they took care of our needs and everything was just perfect for our wedding. I highly recommend them.
                </p>
                <Link to='/testimonials'>
                <button className='btn-cta'>View Our Testimonials</button>
                </Link>
            </div>
            <div className="img-container-cta">
                <img src={testictaimg} alt="" />
            </div>
    </div>
  )
}

