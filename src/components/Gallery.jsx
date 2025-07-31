import React from 'react'
import Container from './Container'
import Slider from 'react-slick';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import gal1 from '../assets/gal1.jpg'
import gal2 from '../assets/gal2.png'
import gal3 from '../assets/gal3.png'
import gal4 from '../assets/gal4.png'
import gal5 from '../assets/gal5.png'
import gal6 from '../assets/gal6.png'
import gal7 from '../assets/gal7.png'
import gal8 from '../assets/gal8.png'
import gal9 from '../assets/gal9.png'

const Gallery = () => {
  function SampleNextArrow(props) {
      const {onClick } = props;
      return (
        <div
          className="absolute top-[50%] translate-y-[-50%] left-4 cursor-pointer text-[#ffffff] text-xl md:text-2xl p-1 bg-[#000000] rounded-full hover:border-1 border-white"
          onClick={onClick}>
          <MdArrowBackIosNew />
        </div>
      );
    }
  
    function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
        <div
          className="absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer text-[#ffffff] text-xl md:text-2xl p-1 bg-[#000000] rounded-full z-[9] hover:border-1 border-white"
          onClick={onClick}>
          <MdArrowForwardIos />
        </div>
      );
    }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className='py-10 md:py-16'>
      <Container>
          <Slider {...settings}>
            <div>
              <img src={gal1} alt="" className='h-[300px] w-full px-2 rounded-[20px]' />
            </div>
            <div>
              <img src={gal2} alt="" className='h-[300px] w-full px-2 rounded-[20px]' />
            </div>
            <div>
              <img src={gal3} alt="" className='h-[300px] w-full px-2 rounded-[20px]' />
            </div>
            <div>
              <img src={gal4} alt="" className='h-[300px] w-full px-2 rounded-[20px]' />
            </div>
            <div>
              <img src={gal5} alt="" className='h-[300px] w-full px-2 rounded-[20px]' />
            </div>
            <div>
              <img src={gal6} alt="" className='h-[300px] w-full px-2 rounded-[20px]' />
            </div>
            <div>
              <img src={gal7} alt="" className='h-[300px] w-full px-2 rounded-[20px]' />
            </div>
            <div>
              <img src={gal8} alt="" className='h-[300px] w-full px-2 rounded-[20px]' />
            </div>
            <div>
              <img src={gal9} alt="" className='h-[300px] w-full px-2 rounded-[20px]' />
            </div>
          </Slider>
      </Container>
    </section>
  )
}

export default Gallery