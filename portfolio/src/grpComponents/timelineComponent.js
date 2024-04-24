// components/Timeline.js
import React from 'react';

const Timeline = ({ events}) => {
    return (

        <div className="bg-black p-4 ">
            <h2 className="text-3xl text-white header-font  mb-12 text-center">Chronology</h2>
            <div className="flex flex-col p-2 mx-auto md:max-w-2xl">
                {events.map((event, index) => (
                    <div key={index} className={`flex md:contents ${index % 2 === 0 ? '' : 'flex-row'} `}>
                        <div className={`relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end- ${index % 2 === 0 ? 'mr-auto md:mr-0 md:ml-auto' : 'mr-auto'}`}>
                            {event.imageUrl && <img src={event.imageUrl} alt={event.title} className="mb-4 rounded-md" style={{ objectFit: 'contain' }} />}
                            <h3 className="text-lg font-semibold lg:text-xl">{event.title}</h3>
                            <p className="mt-2 leading-6">{event.description}</p>
                            <span className="absolute text-sm text-white -top-5 ">{event.date}</span>
                        </div>
                        {index !== events.length - 1 && (
                            <div className={` relative col-start-2 col-end-6 mr-7 md:mx-auto ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
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
