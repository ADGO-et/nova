import React from "react";
import { FaLocationDot, FaPhoneVolume, FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-foreground">
      <h1 className="text-xl font-bold text-center mb-6 text-background">Lets Build Your Streaming Empire.</h1>
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white w-full md:w-1/2 p-8 md:p-24">
          <h2 className="text-2xl font-bold mb-4">Contact <span className="text-black">us</span></h2>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Name" className="p-2 bg-transparent border-b border-white focus:outline-none" />
            <input type="email" placeholder="Email" className="p-2 bg-transparent border-b border-white focus:outline-none" />
            <textarea placeholder="Message" className="p-2 bg-transparent border-b border-white focus:outline-none"></textarea>
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="w-4 h-4" />
              <span>I would like to receive the newsletter.</span>
            </label>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">Submit</button>
          </form>
        </div>
        <div className="relative w-full md:w-1/2 bg-gray-100 flex flex-col justify-center p-8">
          <span className="hidden absolute z-5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cover bg-center font-semibold md:flex items-center text-white p-2 h-full w-[65px] " style={{ backgroundImage: "url(/contact/bgContact.png)" }}>or</span>
          <p className="text-gray-700 text-sm mb-4 ml-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mb-4 ml-6">
            <iframe 
              src="https://maps.google.com/maps?q=Addis%20Ababa&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-32 border border-gray-300 rounded my-4"
              loading="lazy"
            ></iframe>
          </div>
          <div className="text-gray-700 text-sm space-y-2 ml-6">
            <p className='flex gap-2'><FaLocationDot className='w-4 h-4'/> A.A, Ethiopia</p>
            <p className='flex gap-2'><FaPhoneVolume className='w-4 h-4'/> +251 900 000 000</p>
            <p className='flex gap-2'><MdEmail className='w-4 h-4'/> somebody3@gmail.com</p>
          </div>
          <div className="flex space-x-4 mt-4 items-end ml-6">
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaFacebook /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;