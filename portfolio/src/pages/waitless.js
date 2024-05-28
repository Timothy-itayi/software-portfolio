
import React, {useState} from 'react';
import Navbar from '../grpComponents/navbarComponent'
import Header from '../homeComponents/headerComponent';
import LayoutComponent from '../grpComponents/layoutComponent';
import ContentComponent from '../homeComponents/contentComponent';
import BodyLayout from '../grpComponents/bodyLayoutComponent';
import BlogCard from '../homeComponents/blogCardComponent';
import Card from '../grpComponents/coffeeComponent';
import Link from 'next/link';

const Waitless = () => { 

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
            <Header title="Waitless" />
            <div className="flex justify-center ">

<div className="flex  m-20 animate-fade-up  ">
      <ContentComponent style={{ fontSize: '24px', color: 'gray', fontFamily: 'Inter-Regular', paddingLeft: 32 , textAlign: 'center'}}>
      A Full-stack web application  for ordering your food in a restaurant without waiting for the waitress. Why wait? When you can Waitless! Scan the QR code on your table and send the order to the kitchen.
      </ContentComponent>
   </div>

</div>
            <div className="flex justify-center m-10 mb-6 animate-fade-up  ">
                <LayoutComponent style={{ fontSize: '24px', color: 'white', fontFamily: 'Inter-Regular', paddingLeft: 32 }}>
                    This Group Project was created as a final assignment for Dev Academy .
                </LayoutComponent>
            </div>

            <BodyLayout>
                <Card
                    imageUrls={[
                        "waitlessImages/devacademy.png",
                        "logos/react.png",
                        "logos/knex.png",
                        "logos/sqlite3-icon.png",
                        "logos/nodejs-icon.png",
                        "logos/type.png",
                        
                    ]}
                    
                    />   
    <div className="animate-fade-up bg-black pb-1  grid place-items-center sm:px-5 md:px-10 lg:px-20 xl:px-40">
    <div className="  bg-black pt-4 ">

        <a className="flex justify-center m-10 mb-6 animate-fade-up card-font text-white">Click below to Demo the project or  View the Repo</a>
        <div className="p-10  flex justify-center  ">
        <ul className=" flex ">
            <li >
            <Link href="https://orca-app-kf2qf.ondigitalocean.app/">
                <button className="py-2 px-2 rounded  bg-gray hover:bg-white transition duration-300 ease-in-out">
                    <img src='logos/digitalocean.png' className="h-20" alt="digital Logo" />
           
                </button>
            </Link>
            </li>
            
            <li>
            <Link href="https://github.com/harakeke-2023/Waitless">
                <button className="py-6 px-4 ml-3 rounded text-white bg-black hover:bg-gray-300  transition duration-300 ease-in-out">
                <img src='logos/github.png' className="h-12 " alt="Git Logo" />
                </button>
               
                </Link>
            </li>
               
         
        </ul>
    
        </div>
        <BlogCard
        title="Project Overview"
        description="The Waitless application was built using TypeScript, React, Node.js, and SQLite3. The app has a simple and intuitive user interface that guides customers through the ordering process.  I was part of the front-end development team which consisted of Phatt, Sean Kim and Myself and we were tasked with creating a responsive design that looks great on both desktop and mobile devices. The back-end team which consisted of Sean Strickland and Caroline who were tasked with implementing the payment gateway and database integration.
        Since the final project for Dev Academy only allowed for 1 week to plan, develop and deploy, as a team we decided to be clear with our intentions about how we were going to approach the project. We started by creating a rough plan on a white board which would be later refined using Trello. Once we had an outline we split the team into two groups and we were each assigned components to work on and write tests for. "/>

<div className=" grid gap-4 md:flex md:flex-row md:flex-wrap justify-center pt-6 " >
    <img className="  object-contain h-90 w-96 "src="waitlessImages/friday-project-planning.jpg" />
    <img className="  object-contain h-90 w-96 "src="waitlessImages/waitlessPlanMon.jpeg" />
    <img className= "object-contain h-90 w-96 " src="waitlessImages/waitlessPlan.jpeg"/>


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

        export default Waitless;