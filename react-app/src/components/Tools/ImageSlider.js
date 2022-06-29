import { useState } from 'react';

import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';


function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className="slider">
      <MdArrowBackIos onClick={prevSlide} />
      <MdArrowForwardIos onClick={nextSlide} />
      {images.map((image, idx) => (
        <div className={idx === current ? 'slide active' : 'slide'} keys={idx}>
          {idx === current && (
            <img src={image.url} alt={image.url} key={idx} />
          )}
        </div>
      ))}
    </div>
  )
}

export default ImageSlider;
