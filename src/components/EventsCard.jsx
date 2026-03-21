import React from "react";
import Link from "next/link";

const EventsCard = ({ id, image, name, description }) => {
  const cardContent = (
    <div
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-lg 
                 transform transition duration-500 hover:scale-105"
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 text-white">
        <h3 className="text-xl primary-font font-bold text-[#67c6fe]">{name}</h3>
        {/* <p className="text-gray-300 sec-font text-sm mt-2">{description}</p> */}
        <p className="text-gray-300 sec-font text-sm mt-2 line-clamp-1">{description}</p>
      </div>
    </div>
  );

  return id <= 4 ? (
    <Link href={`/events/${id}`}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default EventsCard;
