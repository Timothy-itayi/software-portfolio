
import React, {useState} from 'react';
import Navbar from '../grpComponents/navbarComponent'
import Header from '../homeComponents/headerComponent';
import LayoutComponent from '../grpComponents/layoutComponent';
import ContentComponent from '../homeComponents/contentComponent';
import BodyLayout from '../grpComponents/bodyLayoutComponent';
import {cn } from '../../utils/cn'
import Card from '../grpComponents/coffeeComponent';
import Link from 'next/link';
import f1events from '../backEndComponents/f1events'
import Timeline from '../grpComponents/timelineComponent'
const Grandprix = () => { 

    const [showButton, setShowButton] = useState(false);

    // Function to handle scrolling and toggle button visibility
    const handleScroll = () => {
        if (window.scrollY > 400) { // Adjust 400 to your desired scroll position
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    // Function to handle scrolling to the top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

    <div className="bg-black">

            <Navbar />
            <Header title="GrandPrix History" />
            <div className="flex justify-center ">

<div className="flex  m-20 animate-fade-up  ">
      <ContentComponent style={{ fontSize: '24px', color: 'gray', fontFamily: 'Inter-Regular', paddingLeft: 32 , textAlign: 'center'}}>
      A Full-stack web application for showcasing my love for Formula 1.
      </ContentComponent>
   </div>

</div>
            <div className="flex justify-center m-10 mb-6 animate-fade-up  ">
                <LayoutComponent style={{ fontSize: '24px', color: 'white', fontFamily: 'Inter-Regular', paddingLeft: 32 }}>
                    This personal project was made to test my abilities to consume external web APIs and utilise my  frontend skills.
                </LayoutComponent>
            </div>

            <BodyLayout>
                <Card
                    imageUrls={[
                        "logos/python.png",
                        "logos/flask-logo.png",
                        "logos/jinja-logo.png",
                        "logos/f1-logo.png",
                        "logos/react.png",                  
                        "logos/javascript.png",
                        "logos/nodejs-icon.png",
                   
                        
                    ]}
                    
                    />   
    <div className="animate-fade-up bg-black pb-1  grid place-items-center sm:px-5 md:px-10 lg:px-20 xl:px-40">
    <div className="  bg-black pt-4 ">

        <a className="flex justify-center m-10 mb-6 animate-fade-up card-font text-white">Click below to Viewm the project or  View the Repo</a>
        <div className="p-10  flex justify-center  ">
        <ul className=" flex ">
            <li >
            <Link href="https://grand-prix-history.vercel.app/">
                <button className="py-2 px-2 rounded  bg-gray hover:bg-white transition duration-300 ease-in-out">
                    <img src='logos/grandprixHistory.png' className="h-20" alt="digital Logo" />
           
                </button>
            </Link>
            </li>
            
            <li>
            <Link href="https://github.com/Timothy-itayi/hyperv2">
                <button className="py-6 px-4 ml-3 rounded text-white bg-black hover:bg-gray-300  transition duration-300 ease-in-out">
                <img src='logos/github.png' className="h-12 " alt="Git Logo" />
                </button>
               
                </Link>
            </li>
               
         
        </ul>
    
        </div>
       

<div className={"animate-fade-up"}>
                <Timeline events={f1events} />
               
            </div>



    </div>

</div>

                    

                          
 
            </BodyLayout> 
            {showButton && (
                <button
                className={cn(
                    "fixed bottom-10 right-10 py-2 px-4 rounded-full text-white items-center justify-center",
                    "rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]",
                    "bg-[length:200%_100%] font-medium text-slate-400 transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                    "animate-shimmer"
                  )}
                    onClick={scrollToTop}
                >
                    Return to Top
                </button>
            )}
  
        </div>

        
    )
};

        export default Grandprix;