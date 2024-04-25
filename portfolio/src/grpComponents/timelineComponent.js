import React from 'react';

const Timeline = ({ events }) => {
    return (
        <div className="bg-black ">
            <h2 className="text-5xl text-white header-font mb-12 text-center">Early Development</h2>
            <div className="flex flex-col p-5 mx-auto md:max-w-xl ">
                {events.map((event, index) => (
                    <div key={index} className={`flex md:contents ${index % 2 === 0 ? '' : 'flex-row'} `}>
                        <div className={` relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end- ${index % 2 === 0 ? 'mr-auto md:mr-0 md:ml-auto' : 'mr-auto'}`}>
                        <h3 className="text-4xl  card-font text-center pb-3 pt-3">{event.title}</h3>
                         <div className="flex " >
                            {Array.isArray(event.images) && event.images.map((image, imgIndex) => (
                                
                                <div key={imgIndex} className="flex flex-row pl-3 pr-3 pt-3 pb-3">
                                <img src={image.url} alt={image.alt} className="rounded-md" style={{ objectFit: 'contain' ,width: 'auto', flexShrink: 0  }} />
                               
                                {imgIndex !== event.images.length - 1 && <div className="mb-4 ml-3" style={{ height: '20' }}></div>}
                            </div>
                            
                            ))}
                            </div>
                            
                            <p className="mt-2 name-font">{event.description}</p>
                            <p className="static text-sm card-font text-black -top-5 Sling pt-4">{event.date}</p>
                        </div>
                        {index !== events.length - 1 && (
                            <div className={`relative col-start-2 col-end-6 mr-7 md:mx-auto ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                                <div className="flex items-center justify-center w-6 h-full">
                                    <div className="w-1 h-full bg-white rounded-t-full bg-gradient-to-b from-white to-white"></div>
                                </div>
                                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-white rounded-full top-1/2"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
