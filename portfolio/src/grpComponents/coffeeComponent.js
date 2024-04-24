const Card = ({ imageUrl,imageUrl2 ,title, description, author, author2, date }) => {
    return (
      <div className="rounded overflow-hidden animate-fade-up shadow-lg">
        <div className="flex flex-col md:flex-row  ">
        <img className="object-cover w-48  h-48 p " src={imageUrl} alt="Card image" style={{ marginLeft: '3rem' }} />
        <img className="object-cover w-48  h-48 ml-4 " src={imageUrl2} alt="Card image" style={{ marginLeft: '3rem' }}  />
        </div>
        <div className="px-6 py-4">
          <div className="text-white text-xl mb-2">{title}</div>
          <p className="text-white text-base">{description}</p>
        </div>
        <div className="px-6 py-4">
          <div className="name-font text-white text-sm mb-2">{author}</div>
          <div className="name-font text-white  mb-2">{author2}</div>
          <p className="text-white text-xs">{date}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
   