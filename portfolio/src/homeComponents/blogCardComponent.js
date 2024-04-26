import React from 'react';

const BlogCard = ({ imageUrls = [], title, description }) => {
  return (
    <div className="  bg-black  overflow-hidden">
        <div >
           
            <div  className="grid gap-4 md:flex md:flex-row md:flex-wrap justify-center pt-2 pb-3 pl-2 items-center bg-black   rounded   ">
        {Array.isArray(imageUrls) && imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            className={ `object-contain w-48 h-48  ${index > 0 ? 'ml-3' : 'mr-3'}`}
            src={imageUrl}
            alt={`Card image ${index}`}
       
          />
        ))}
            </div>
       
      <div className="flex flex-col justify-between p-4 bg-black border border-white  border-8 border-double rounded leading-normal">
        <h5 className="mb-2 text-2xl text-center header-font tracking-tight text-white dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-center name-font text-white  dark:text-white">{description}</p>
      </div>
    </div>
    </div>
        

    
  );
};

export default BlogCard;
