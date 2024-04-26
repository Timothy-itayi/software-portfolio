


const Card = ({ imageUrls = []   }) => {

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
      
      </div>
    );
  };
  
  export default Card;
   