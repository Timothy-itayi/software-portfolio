// pages/Home.js

import React from 'react';
import ContentComponent from '../homeComponents/contentComponent';

const Content = ()  => {
  return (
<>
 

    <div className="flex justify-center m-10 mb-6 animate-fade-up  ">
      <ContentComponent style={{ fontSize: '24px', color: 'white', fontFamily: 'Inter-Regular', paddingLeft: 32 }}>
        Hi there , I am a  Full Stack Developer with a keen eye for front-end web and mobile developement. I value Gratitude , Honesty and above all else Humility. These virtues guide my approach to problem solving and life in general. If I am not in front of a screen you will either find me in the gym weightlifting or sim racing on Gran Torismo. Curious to know more take a gander at some of my projects...
      </ContentComponent>
   </div>


</>
  
 
)
};
export default Content;