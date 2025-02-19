import React, { useState } from "react";

const CenterImg = () => {

  return (
    <div className="w-full relative">
          <div>
            <img src="/working-man.avif" alt="Slide 1" className="w-full h-auto" />
          </div>

      {/* Dynamic Info Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:bottom-[-60px] w-[95%] md:w-[100%] lg:w-[95%] bg-white py-10 px-6 md:px-12 text-left shadow-lg  z-20">
        <h2 className="text-2xl md:text-3xl font-bold">Organise your life</h2>
        <p className="text-gray-600 mt-3 text-lg">Keep your ideas and notes organised with OneNote.</p>
        <a
          className="mt-5 inline-block bg-[#0067b8] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-950 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CenterImg;

