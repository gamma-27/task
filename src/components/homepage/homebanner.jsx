"use client";
import React from "react";

import Image from "next/image";
const Banner = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-around py-5">
        <div className="mr-4">
          <img
            src='/task.jpg' // Replace with the actual path to your image
            alt="Banner"
            className=" w-40 rounded-full "
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Welcome to Task Manager
          </h1>
          <p className="text-xl mb-8">
            Organize your tasks efficiently with our task manager app.
          </p>
          <button
            className="bg-white text-blue-500 px-4 py-2 mt-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
            onClick={() => {
              // Add your action button click event handler logic here
              console.log("Action button clicked!");
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
