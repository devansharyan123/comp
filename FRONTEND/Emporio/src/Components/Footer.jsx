import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <hr className="border-gray-600 mx-auto w-[1300px]" />
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-start p-4">
          <div className="text-center">
            <p className="font-bold text-[30px]">EmporioPrice</p>
            <div className="flex justify-center py-2 gap-4">
              <FaLinkedin size={20} />
              <FaTwitter size={20} />
              <FaInstagram size={20} />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-start space-y-2">
              <p className="font-bold">Help Center</p>
              <p>FAQ's</p>
              <p>Support Center</p>
              <p>How it works</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <p className="font-bold">About us</p>
              <p>Site map</p>
              <p>Subscribe</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <p className="font-bold">Contact Us</p>
              <a href="#">heythere@gmail.com</a>
              <p>+91 123456677899</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
