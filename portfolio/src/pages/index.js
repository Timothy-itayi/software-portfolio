// pages/index.js

import Head from 'next/head';
import Navbar from '../homeComponents/navbarComponent'
import Header from '../homeComponents/headerComponent';
import Card from '../homeComponents/projectCardComponent';
import Content from './content'
import ImageWithHover from '../homeComponents/imageComponent';
import BlogCard from '../homeComponents/blogCardComponent';
import React, {useState,useRef,} from 'react';

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const projectsRef = useRef(null); // Reference to the projects section

    // Function to handle scrolling and toggle button visibility
    const handleScroll = () => {
        if (window.scrollY > 400) { 
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    // Function to handle scrolling to the projects section
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
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
      <Head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <Navbar scrollToProjects={scrollToProjects}/>
        
  

    
  
      <Header name="Timothy Itayi" title="Full Stack Developer" />

<div className="flex justify-center animate-fade-up m-12 mb-6 ml-16">
<ImageWithHover src1="homeImages/headshot.jpeg" src2="homeImages/headshot2.jpeg" alt="Image" />
</div>
<div className="animate-fade-up flex justify-center pt-5  pl-5 space-x-4">
            <a className="animated-button text-white " href="/Timothy_Itayi_-_Full_Stack_Developer.pdf" download>Download Resume</a>
      </div>
<Content/>

<div className="py-6 flex flex-wrap  justify-center  ">
<h2 className="  text-center text-2xl card-font text-white  md:text-4xl">
       Here is what I have learned during my time at Dev Academy 
      </h2>
  <div className="md:mx-auto container   m-12 mb " >
  
     
      <BlogCard
        imageUrls={[
       
          "/logos/h-removeb.png",
          "/logos/javascript.png",
          "/logos/kiss.png",
        
                   
                    ]}
        title="Fundamental Languages"
        description="Learning the rudimentary principles is your one stop shop to creating whatever you want. I have learned a lot with these methods when it has come to building websites. I am confident in my abilities with these but I always know I have more room for improvement because there is always something new to be gained from going back to the basics. It's like playing a sport you have got to practice to get better.   "
      />
      <BlogCard
        imageUrls=
         {["/logos/react.png",
       "/logos/type.png",
      "/logos/tailwind.png"]}
        title="Frameworks "
        description="After a year of coding with React It's safe to say I am fairly comfortable with it and can create whatever I want in a reasonable time. However everytime I make a new  project  with it I am always humbled by what I do not know and am always looking to grow as a developer."

      />
        <BlogCard
        imageUrls={[
          "/logos/nodejs-icon.png",
          "/logos/sqlite3-icon.png",
          "/logos/Git_icon.png",
                   
                   ]}
        title="Back-end Technologies"
        description="As much as I enjoy Front-end for its flair I needed to grasp the back-end portion of this discipline. Dev Academy provided an introductory back-end stack to get me familiar with. We were also introduced to Restful-APis as well as CD/CI methodologies.     "
      />
    
    </div>
 
  </div >
     
     <div className="py-6 flex flex-wrap gap-4 justify-center  ">
      <h2 className="mb-4  text-center text-2xl card-font text-white  md:text-4xl">
        My Introduction to Computer Science with CS50x
      </h2>
      <div className="md:mx-auto container p-2  m-12 mb ">
      <BlogCard
        imageUrls={["/logos/C.png","/logos/swfit.png"]}
        title="Computer Science Fundamentals"
        description="CS50 taught me what Dev Academy could not provide and that was a more foundational understanding of programming. I found it refreshing to take a step back from learning frameworks and technologies to having a better understanding of a langauge at a lower level. It really made me appreciate the details a lot more and gave me more confidence when dealing with higher-level abstract languages like Swift.  "
      />
             <BlogCard
    imageUrls={["logos/mysql-logo.svg","/logos/python.png"]}
        title="More Back-end"
        description="My understanding of back-end development expanded significantly once I delved into Python, despite its higher level of abstraction. Initially, it took some time to adjust to this new paradigm, but with persistence and practice, I gradually became accustomed to working with Python. Python's versatility and readability ultimately enhanced my development workflow, enabling me to tackle complex backend tasks with greater efficiency and confidence "
      />
      
    
      </div>
    
     </div>
 
 

     <div ref={projectsRef}></div>
<div className="py-5  flex justify-center  ">
  <div className="xl:container mx-auto px-6 m-12 mb ">
    <div className="mb-16    ">
      <h2 className="mb-4 text-2xl font-bold text-white text-center md:text-4xl">
        Projects 
      </h2>
      <p className="text-white text-center">
        Here are some of my projects.
      </p>
    </div>

    <div className=" grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
   
      <Card
        title="Waitless"
        description="A restaurant web application designed to keep up with customer needs made with React"
        imageUrl="logos/group1.png"
        altText="waitlessLogo"
        link="/waitless"
    />
      
      
      <Card
        title="CoffeeSnob"
        description="A cafe app to help customers discover coffee spots in their area made with Swift and TomTomSDk"
        imageUrl="logos/coffeesnobLogo.png"
        altText="coffeesnob"
        link = "/coffeesnob"
       />

        <Card
        title="Grandprix History"
        description="A web application to showcase my love for Formula 1. Made with React and Nodejs."
        imageUrl="logos/grandprixHistory.png"
        altText="gpHistory"
        link = "/Grandprix"
       />
        
        
      </div>
  </div>
</div>
{showButton && (
                <button
                    className=" fixed bottom-10 right-10  py-2 px-4 rounded-full name-font  text-white bg-gray-400  "
                    onClick={scrollToTop}
                >
                    Return to Top
                </button>
            )}
  

      <footer>
        <p>&copy; {new Date().getFullYear()} Timothy itayi</p>
      </footer>
    </div>
  );
}
