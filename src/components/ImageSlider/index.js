import React, { useState } from 'react';
import { SliderData } from './data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './ImageSlider.css';

import { TopLine } from './ImageSliderElements';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div id="gallery" style={{ padding: '10%', background: '#152349' }}>
        {/* <h1 className="title">Gallery</h1> */}
        <TopLine>Gallery</TopLine>
        <section className="slider responsive">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt="ami" className="image" />
                )}
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default ImageSlider;
