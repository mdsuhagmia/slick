import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaMapLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
    <section className='bg-[#1F1F1F] py-12 md:py-24'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5'>
          <div className='col-span-2 flex justify-center md:justify-start'>
            <div>
              <a href="#"><img src={logo} alt="" className='pb-[33px]' /></a>
            <div className='flex gap-2 items-center text-white pb-[15px]'>
              <a href="#"><MdOutlineMarkEmailUnread /></a>
              <p>mail@yourcompany.com</p>
            </div>
            <div className='flex gap-2 text-white items-center pb-[15px]'>
              <a href="#"><FiPhoneCall /></a>
              <p>+896 120 5889 (Toll free)</p>
            </div>
            <div className='flex gap-2 items-center text-white pb-[33px]'>
              <a href="#"><FaMapLocationDot /></a>
              <p>101 Baker Street, New York, USA, 12345</p>
            </div>
              <div className='flex gap-2 lg:gap-4 text-white items-center pb-2'>
              <a className='bg-[#F40404] p-2 rounded-full hover:bg-[#f40404c3]' href="#"><FaFacebookF className='text-2xl' /></a>
              <a className='bg-[#F40404] p-2 rounded-full hover:bg-[#f40404c3]' href="#"><FaTwitter className='text-2xl' /></a>
              <a className='bg-[#F40404] p-2 rounded-full hover:bg-[#f40404c3]' href="#"><FaLinkedinIn className='text-2xl' /></a>
              <a className='bg-[#F40404] p-2 rounded-full hover:bg-[#f40404c3]' href="#"><FaInstagram className='text-2xl' /></a>
             </div>  
            </div>
          </div>

          <div className='hidden md:block pt-[32px]'>
            <div>
              <h3 className='text-[#fff] text-[16px] font-bold font-pops pb-[21px]'>Company</h3>
              <ul className=''>
                <li className='pb-1'><a className='text-[#fff] text-[12px] hover:text-[#ffffffdc] font-pops font-semibold' href="/">Home</a></li>
                <li className='pb-1'><a className='text-[#fff] text-[12px] hover:text-[#ffffffdc] font-pops font-semibold' href="/about">About</a></li>
                <li className='pb-1'><a className='text-[#fff] text-[12px] hover:text-[#ffffffdc] font-pops font-semibold' href="/about/service">Services</a></li>
                <li className='pb-1'><a className='text-[#fff] text-[12px] hover:text-[#ffffffdc] font-pops font-semibold' href="/about/service/gallery">Gallery</a></li>
              </ul>
            </div>
          </div>

          <div className='hidden md:block pt-[32px]'>
            <div>
              <h3 className='text-[#fff] text-[16px] font-bold font-pops pb-[21px]'>Others</h3>
              <ul className=''>
                <li className='pb-1'><a className='text-[#fff] text-[12px] hover:text-[#ffffffdc] font-pops font-semibold' href="/about/service/gallery/blog">Blog</a></li>
                <li className='pb-1'><a className='text-[#fff] text-[12px] hover:text-[#ffffffdc] font-pops font-semibold' href="/about/service/gallery/blog/contact">Contact</a></li>
                <li className='pb-1'><a className='text-[#fff] text-[12px] hover:text-[#ffffffdc] font-pops font-semibold' href="#">Terms & Conditions</a></li>
                <li className='pb-1'><a className='text-[#fff] text-[12px] hover:text-[#ffffffdc] font-pops font-semibold' href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className='hidden lg:block pt-[32px]'>
            <h3 className='text-[#fff] text-[16px] font-bold font-pops pb-[21px]'>Certificate</h3>
              <div className='flex gap-1'>
                <div className='h-[46px] w-[110px] bg-white rounded-[4px]'>
                  <h2 className='text-[#008AD8] text-[20px] font-bold font-pops text-center'>ISO 88</h2>
                  <p className='text-[#008AD8] text-[8px] font-medium font-pops text-center'>Environmentally Safe</p>
                </div>
                <div className='h-[46px] w-[110px] flex justify-center items-center bg-white rounded-[4px]'>
                  <h2 className='text-[#009818] text-[14px] font-bold font-pops'><span className='text-[#980077]'>Liquid</span>Green</h2>
                </div>
              </div>
          </div>

        </div>
      </Container>
    </section>

    <section className='bg-[#282828] py-[42px]'>
      <Container>
        <div>
          <div className='flex items-center justify-center md:justify-start'>
            <p className='text-[#6C6C6C] text-[12px] md:text-[16px] font-bold font-pops'>© Copyright 2022 by AltDesain Studio – All right reserved.</p>
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Footer