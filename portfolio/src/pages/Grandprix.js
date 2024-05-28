
import React, {useState} from 'react';
import Navbar from '../grpComponents/navbarComponent'
import Header from '../homeComponents/headerComponent';
import LayoutComponent from '../grpComponents/layoutComponent';
import ContentComponent from '../homeComponents/contentComponent';
import BodyLayout from '../grpComponents/bodyLayoutComponent';
import BlogCard from '../homeComponents/blogCardComponent';
import Card from '../grpComponents/coffeeComponent';
import Link from 'next/link';
import ImageWithHover from '@/homeComponents/imageComponent';
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

        <a className="flex justify-center m-10 mb-6 animate-fade-up card-font text-white">Click below to Demo the project or  View the Repo</a>
        <div className="p-10  flex justify-center  ">
        <ul className=" flex ">
            <li >
            <Link href="https://client-ten-green.vercel.app/">
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
        <BlogCard
        title="Project Overview"
        description="GrandPrix History was initially developed with Python, Flask, and Jinja to test how far I could push the application. Python made it easy to set up the backend and consume external Web APIs, but creating a suitable frontend was challenging. Given the deadline, I decided to transition to React for the frontend. I set a one-week timeline to plan, develop, and deploy the web application, starting with a React template. My experience with Next.js for my portfolio website made configuring GpHistory much easier. This project also tested my backend skills in setting up API routes and clients for the frontend. Despite some trial and error, I produced a well-functioning application built with React, JavaScript, Node.js, and Tailwind. Additionally, I wrote basic tests to get comfortable with Jest. "/>

<div className=" grid gap-4 md:flex md:flex-row md:flex-wrap justify-center pt-6 " >
    <img className="  object-contain h-90 w-96 "src="GrandprixImages/planningGP.png" />
    <img className="  object-contain h-90 w-96 "src="GrandprixImages/python-project-1.png" />
    <img className= "object-contain h-90 w-96 " src="GrandprixImages/python-project-2.png"/>


  </div>

    </div>

</div>

                    

                          
 
            </BodyLayout> 
            {showButton && (
                <button
                    className=" fixed bottom-10 right-10  py-2 px-4 rounded-full name-font  text-white bg-gray-400  "
                    onClick={scrollToTop}
                >
                    Return to Top
                </button>
            )}
  
        </div>

        
    )
};

        export default Grandprix;