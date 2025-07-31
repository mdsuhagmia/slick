import React from 'react'
import Slider from 'react-slick';
import ban1 from '../assets/ban1.jpg'
import ban2 from '../assets/ban2.jpg'
import ban3 from '../assets/ban3.jpg'
import ban4 from '../assets/ban4.jpg'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const Banner = () => {
  function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div
        className="absolute top-[50%] translate-y-[-50%] left-4 cursor-pointer text-[#ffffff] text-xl md:text-3xl p-2 bg-[#000000] rounded-full hover:border-1 border-amber-300"
        onClick={onClick}>
        <MdArrowBackIosNew />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer text-[#ffffff] text-xl md:text-3xl p-2 bg-[#000000] rounded-full z-[9] hover:border-1 border-amber-300"
        onClick={onClick}>
        <MdArrowForwardIos />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <a href="#">
            <img src={ban1} alt="" 
            className='h-[250px] md:h-[300px] lg:h-[400px] xl:lg:h-[600px] 2xl:h-[800px] w-full' />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={ban2} alt="" 
            className='h-[250px] md:h-[300px] lg:h-[400px] xl:lg:h-[600px] 2xl:h-[800px] w-full' />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={ban3} alt="" 
            className='h-[250px] md:h-[300px] lg:h-[400px] xl:lg:h-[600px] 2xl:h-[800px] w-full' />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={ban4} alt="" 
            className='h-[250px] md:h-[300px] lg:h-[400px] xl:lg:h-[600px] 2xl:h-[800px] w-full' />
          </a>
        </div>
    </Slider>
    </div>
  )
}

export default Banner