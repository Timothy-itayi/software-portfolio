


const Card = ({ imageUrls = [] ,title, description, author, author2,  }) => {

    return (
      <div className=" overflow-hidden animate-fade-up    ">
        <div className="grid gap-4 md:flex md:flex-row md:flex-wrap justify-center ">
        {Array.isArray(imageUrls) && imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            className={ `object-contain w-48 h-48  ${index > 0 ? 'ml-4' : 'mr-4'}`}
            src={imageUrl}
            alt={`Card image ${index}`}
       
          />
        ))}
        </div>
        <div className="px-6 py-4  ">
          <div className="text-white SlingBold text-2xl text-center " >{title}</div>
          <p className="text-white text-base mt-3">{description}</p>
        </div>
        <div className="px-6 py-4">
          <div className="name-font text-white text-sm ">{author}</div>
          <div className="name-font text-white  ">{author2}</div>
      
        </div>
      </div>
    );
  };
  
  export default Card;
   