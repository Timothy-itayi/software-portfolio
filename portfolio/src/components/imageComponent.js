import {useState } from 'react';


const ImageWithHover= ({src1, src2,  alt}) => {
const [isHovered, setIsHovered] = useState(false);

return (
    <div
    className= "overflow-hidden rounded-full h-48 w-48 animte-easein "
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>

        <img src={src1}
         alt={alt} 
         className={`min-w-full min-h-full object-cover ${isHovered ? 'opacity-0' : 'opacity-100'}`}
       />
     <img src={src2}
         alt={alt} 
         className={`min-w-full min-h-full transition-opacity duration-1000 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
       />

    </div>
);
}

export default ImageWithHover;
