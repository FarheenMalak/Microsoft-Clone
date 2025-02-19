import React from "react";

const Card = ({ image, title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col p-5">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Text Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mt-4">{title}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{description}</p>

        {/* Button - Positioned at the bottom */}
        <a
          href={buttonLink}
          className="bg-[#0067b8] text-white text-sm font-semibold py-2 px-4 rounded mt-3 self-start"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;

