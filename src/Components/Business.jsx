import React from "react";
import Card from "./Card";

const Business = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-70 md:mt-20">
      <Card
        image="/card5.avif"
        title="Microsoft 365 Copilot"
        description="Save time and focus on the things that matter most with AI in Microsoft 365 for business."
        buttonText="Learn More"
        buttonLink="#"
      />
      
      <Card
        image="/card6.avif"
        title="Get Microsoft Teams for your business"
        description="Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place."
        buttonText="Find the right plan for your business"
        buttonLink="#"
      />
      
      <Card
        image="/card7.webp"
        title="Welcome to your Windows 365 Cloud PC"
        description="Securely stream your Windows experience from the Microsoft cloud to any device."
        buttonText="Get it Today"
        buttonLink="#"
      />
      
      <Card
        image="/card8.webp"
        title="Visual Studio 2022"
        description="Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games."
        buttonText="Download Visual Studio 2022"
        buttonLink="#"
      />
    </div>
  );
};

export default Business;