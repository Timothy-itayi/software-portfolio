// pages/Home.js

import React from 'react';
import ContentComponent from '../homeComponents/contentComponent';

const Content = ()  => {
  return (
<>
 

    <div className="flex justify-center m-10 mb-6 animate-fade-up  ">
      <ContentComponent style={{ fontSize: '24px', color: 'white', fontFamily: 'Inter-Regular', paddingLeft: 32 }}>
        Hi there, I'm a full Stack Developer with a passion for Front-end developement. If I am not in front of a screen you will either  find me in the gym weightlifting or sim racing on Gran Torismo.
      </ContentComponent>
   </div>


</>
  
 
)
};
export default Content;