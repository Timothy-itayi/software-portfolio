
import Navbar from '../grpComponents/navbarComponent';
import Header from '../homeComponents/headerComponent';
import LayoutComponent from '../grpComponents/layoutComponent'
import BodyLayout from '../grpComponents/bodyLayoutComponent';
import Card from '../grpComponents/coffeeComponent';
import Timeline from '../grpComponents/timelineComponent';
import events from '../backEndComponents/events';
import React, {useState} from 'react';
import Link from 'next/link';

const Coffee = () => { 

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

    <><><div className="bg-black">

            <Navbar />
            <Header title="CoffeeSnob" ddescription="An IOS app designed to help people discover cafes in their area." />
            <div className="flex justify-center m-10 mb-6 animate-fade-up  ">
                <LayoutComponent style={{ fontSize: '24px', color: 'white', fontFamily: 'Inter-Regular', paddingLeft: 32 }}>
                    This Project was created as a final assignment for Harvards Intro to Computer Science Course for CS50X 2024.
                </LayoutComponent>
            </div>
        </div>
            <BodyLayout>
                <Card
                    imageUrls={[
                        "coffeeImages/snack.png",
                        "coffeeImages/reactLogoBlk.png",
                        "coffeeImages/jsLogo.png",
                        "coffeeImages/cslogowhite.png",
                        "logos/xpo.png",
                        
                    ]}
                    
                    />   
    
    <div className="animate-fade-up bg-black pb-1  grid place-items-center sm:px-5 md:px-10 lg:px-20 xl:px-40">
    <div className="  bg-black pt-4 ">

        <a className="flex justify-center m-10 mb-6 animate-fade-up card-font text-white">Click below to Demo the project or  View the Repo</a>
        <div className="p-10  flex flex-row justify between ml-4 mr-4  ">
        <ul className=" flex">
            <li >
            <Link href="https://youtu.be/vS-nl_sHrvI">
                <button className="py-2 px-2 rounded  bg-black hover:bg-red-500 transition duration-300 ease-in-out">
                    <img src='logos/youtube.png' className="h-20 filter invert" alt="youtube Logo" />
           
                </button>
            </Link>
            </li>
            
            <li>
            <Link href="https://github.com/Timothy-itayi/CoffeeSnobv1.3?tab=readme-ov-file">
                <button className="py-6 px-4 ml-3 rounded text-white bg-black hover:bg-gray-300  transition duration-300 ease-in-out">
                <img src='logos/github.png' className="h-12 " alt="Git Logo" />
                </button>
               
                </Link>
            </li>
               
         
        </ul>
        </div>
        
    </div>
</div>

                    

                          
 
            </BodyLayout>
            </>
         
            <div className={"animate-fade-up"}>
                <Timeline events={events} />
               
            </div>

            {showButton && (
                <button
                    className=" fixed bottom-10 right-10  py-2 px-4 rounded-full name-font  text-white bg-gray-400  "
                    onClick={scrollToTop}
                >
                    Return to Top
                </button>
            )}
            </>
      
    )

}

export default Coffee; 
