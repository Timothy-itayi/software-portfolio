// pages/Home.js

import React from 'react';
import ContentComponent from '../homeComponents/contentComponent';

const Content = ()  => {
  return (
<>
 
<div className="flex justify-left ">
<div className="flex   m-10 mb-6 animate-fade-up  ">
      <ContentComponent style={{ fontSize: '24px', color: 'white', fontFamily: 'Inter-Regular', paddingLeft: 32 , textAlign: 'center'}}>
      Hi, I am a  Full Stack Developer with a keen eye for front-end developement. I enjoy the challenge of building projects and learning to grow as a developer. If I am not in front of a screen you will either find me WeightLifting,  BBQing or Sim Racing.
      </ContentComponent>
   </div>

</div>
   

</>
  
 
)
};
export default Content;