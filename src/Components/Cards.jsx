import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-80 md:mt-20">
      <Card
        image="/card1.jpg"
        title="Designed for life today – and tomorrow"
        description="The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love."
        buttonText="See if your PC is ready"
        buttonLink="#"
      />
      
      <Card
        image="/card2.avif"
        title="Microsoft Edge"
        description="World-class performance with more privacy, more productivity and more value while you browse."
        buttonText="Download now"
        buttonLink="#"
      />
      
      <Card
        image="/card3.webp"
        title="Microsoft OneDrive"
        description="Save your files and photos to OneDrive and access them from any device, anywhere."
        buttonText="Learn More"
        buttonLink="#"
      />
      
      <Card
        image="/card4.webp"
        title="Outlook for iOS and Android"
        description="Connect. Organise. Get things done."
        buttonText="Download now"
        buttonLink="#"
      />
    </div>
  );
};

export default Cards;

