import React from 'react';

const BlogCard = ({ imageUrls = [], title, description }) => {
  return (
    <div className="  bg-black pt-5 overflow-hidden">
        <div>
        <div  className="flex pt-2 pb-3 pl-2 items-center bg-white border border-gray-200 rounded-lg shadow    dark:bg-gray-800 ">
        {Array.isArray(imageUrls) && imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            className={ `object-contain w-48 h-48  ${index > 0 ? 'ml-3' : 'mr-3'}`}
            src={imageUrl}
            alt={`Card image ${index}`}
       
          />
        ))}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
    </div>
        </div>

    
  );
};

export default BlogCard;
