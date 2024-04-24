// components/CardComponent.js
import React from 'react';
import Link from 'next/link'


const Card = ({ title, description, imageUrl, altText, link }) => {
  return (
    
    <div className="group relative rounded-3xl bg-gray-400 pt-5 overflow-hidden">
      <img
        className="mx-auto h-[22rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        src={imageUrl}
        alt={altText}
        loading="lazy"
       style={{ height: '60%', objectFit: 'contain'}}
      />
      <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-3 py-4 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
        <div>
          <h4 className="text-xl font-semibold dark:text-gray-700 text-white header-font py-1">{title}</h4>
          <p className="mt-3 mb-4 text-gray-300 dark:text-gray-400 name-font ">{description}</p>
        </div>
        {link && (
          <Link href={link}>
            <p className="text-blue-500 hover:underline pb-3">Read more</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card
