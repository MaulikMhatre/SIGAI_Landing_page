"use client";
import React from "react";

const MosaicGrid = ({ images = [] }) => {

    const heightClasses = [
    "h-1/4",     
    "h-3/4",      
    "h-1/2",      
    "h-1/2",     
    "h-2/3",    
    "h-1/3",    
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col flex-wrap w-full h-[80vh]">
        {images.map((src, i) => (
          <div
            key={i}
            className={`flex items-center justify-center border-[2px] border-white rounded gap-2
                        bg-cover bg-center 
                        ${heightClasses[i % heightClasses.length]}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default MosaicGrid;
