import React from 'react';
import service_background from '../assets/service_background.jpg';

const Service = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${service_background})` }}>
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-start pt-10 text-center  px-6">
        <p className="text-lg text-black mb-4">
        what we offer
        </p>
        <h2 className="text-3xl font-semibold text-[#016c8c]">Featured Services</h2>

      </div>
    </div>
  );
};

export default Service;
