// pages/Home.js

import React from 'react';
import ContentComponent from '../components/contentComponent';

export default function Content() {
  return (
<>
  {/* Title */}
  <div className="flex justify-center m-12 mb-6 ">
      <h2 className="text-xl font-semibold">About Me</h2>
    </div>
    
    {/* Description */}
    <div className="flex justify-center m-12 mb-6 ">
      <ContentComponent style={{ fontSize: '24px', color: 'black', fontFamily: 'Inter-Regular', paddingLeft: 32 }}>
        Hi there, &#9995; My name is Timothy Itayi and I am a junior full stack developer with a keen eye for front-end web and mobile development.
      </ContentComponent>
   </div>


</>
  
 
)
}