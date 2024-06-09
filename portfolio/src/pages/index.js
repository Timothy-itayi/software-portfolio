// pages/index.js

import {cn } from '../../utils/cn'
import Head from 'next/head';
import Navbar from '../homeComponents/navbarComponent'
import Header from '../homeComponents/headerComponent';
import Card from '../homeComponents/projectCardComponent';
import Content from './content'
import ImageWithHover from '../homeComponents/imageComponent';
import BlogCard from '../homeComponents/blogCardComponent';
import React, {useState,useRef,} from 'react';
import { CardBody, CardContainer, CardItem } from "../grpComponents/3d-card";
import {
  IconTableColumn,
} from "@tabler/icons-react";
import { Tabs } from "../grpComponents/tab-animation";
import { BentoGrid, BentoGridItem } from "../grpComponents/bento-grid";
import Link from "next/link";
import Image from "next/image";






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
    <><div className="bg-black  animate-fade-up ">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar scrollToProjects={scrollToProjects} />


      

<div className="flex flex-row">
<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    
           

</div>

    


     

     
     
     <div className="flex justify-center">
     <a className={cn(
                  " right-10 py-2 px-4 rounded-full text-white items-center justify-center",
                  "rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]",
                  "bg-[length:200%_100%] font-medium text-slate-400 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                  "animate-shimmer text-white"
                )} href="/Timothy_Itayi_-_Full_Stack_Developer.pdf" download>Download Resume</a>
    
     </div>


<div className="flex justify-center  pt-7 mb-10 ">
  <h1 className="text-white font-bold text-4xl"> Dev Academy and CS50  </h1>
</div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
   
      <Tabs tabs={devAcademy} />

      
   </div>



   
     

    </div>
    
    <div ref={projectsRef}>
    <div className="py-5  flex justify-center  ">
            <div className="xl:container mx-auto px-6   py-6 m-12 mb ">
              <div className="mb-16    ">
                <h2 className="mb-4 text-2xl font-bold text-white text-center md:text-4xl">
                  Projects
                </h2>
               
                <div className="flex flex-row justify-center">
  <div className="pr-6">
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-[32rem] rounded-xl p-6 border flex flex-col justify-between">
        <div>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Waitless
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            A restaurant web application designed to keep up with customer needs made with React
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/logos/group1.png"
              height="500"
              width="500"
              className="object-contain rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </div>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as={Link}
            href="/waitless"
            className="px-4 py-2 px-8 py-0.5  border-2 border-black dark:border-black uppercase bg-gray-399 text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] rounded text-xs font-normal dark:text-white"
          >
            See More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  </div>

  <div className="pr-6">
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-[32rem] rounded-xl p-6 border flex flex-col justify-between">
        <div>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            CoffeeSnob
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            A cafe app to help customers discover coffee spots in their area made with Swift and TomTomSDK
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/logos/coffeesnobLogo.png"
              height="500"
              width="500"
              className="object-contain rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </div>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as={Link}
            href="/coffeesnob"
            target="__blank"
            className="px-4 py-2 px-8 py-0.5  border-2 border-black dark:border-black uppercase bg-gray-399 text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] rounded text-xs font-normal dark:text-white"
            >
              See More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  </div>

  <div className="pr-6">
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-[32rem] rounded-xl p-6 border flex flex-col justify-between">
        <div>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            GrandPrix-History
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            A web application to showcase my love for Formula 1. Made with React and Nodejs.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/logos/grandprixHistory.png"
              height="500"
              width="500"
              className="object-contain rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </div>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as={Link}
            href="/grandprix"
            target="__blank"
            className="px-4 py-2 px-8 py-0.5  border-2 border-black dark:border-black uppercase bg-gray-399 text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] rounded text-xs font-normal dark:text-white"
            >
              See More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  </div>
</div>

        </div> 

              </div>



        
            </div>
     
          </div>
          
          
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
  

      <footer>
        <p>&copy; {new Date().getFullYear()} Timothy itayi</p>
      </footer>
    </>
  );
}




  const devAcademy  = [
    {
      title: "Fundamentals",
      value: "fundamentals",
      content: (
        <div className="md:mx-auto container  bg-white">
       
        
          
            <div className="md:mx-auto container  border-full border-2 ">
              <BlogCard
                imageUrls={[
                  "/logos/h-removeb.png",
                  "/logos/javascript.png",
                  "/logos/kiss.png",
                ]}
                title="Fundamental Languages"
                description="Learning the rudimentary principles is your one stop shop to creating whatever you want. I have learned a lot with these methods when it has come to building websites. It's like playing a sport you have got to practice to get better." />
             
            </div>
        
        </div>
      ),
    },
    {
      title: "FrameWorks",
      value: "frameworks",
      content: (
        <div className="md:mx-auto container  border-full border-2  bg-white ">
    
          <BlogCard
                imageUrls={[
                  "/logos/react.png",
                  "/logos/type.png",
                  "/logos/tailwind.png",
                ]}
                title="Frameworks"
                description="After a year of coding with React, it's safe to say I am fairly comfortable with it and can create whatever I want in a reasonable time. However, every time I make a new project with it, I am always humbled by what I do not know and am always looking to grow as a developer." />

        </div>
      ),
    },
    {
      title: "Back End",
      value: "back end",
      content: (
        <div className="md:mx-auto container  border-full border-2  bg-white">
   
          <BlogCard
                imageUrls={[
                  "/logos/nodejs-icon.png",
                  "/logos/sqlite3-icon.png",
                  "/logos/Git_icon.png",
                ]}
                title="Back-end Technologies"
                description="As much as I enjoy Front-end for its flair, I needed to grasp the back-end portion of this discipline. Dev Academy provided an introductory back-end stack to get me familiar with. We were also introduced to Restful APIs as well as CD/CI methodologies." />
        </div>
      ),
    },
      {
      title: "Computer Science",
      value: "computer sciene",
      content: (
        
        <div className="md:mx-auto container   border-full border-2 bg-white">
        
          
            <div className="md:mx-auto container  ">
            <BlogCard
            imageUrls={["/logos/C.png", "/logos/swfit.png"]}
            title="Computer Science"
            description="CS50 taught me what Dev Academy could not provide and that was a more foundational understanding of programming. I found it refreshing to take a step back from learning frameworks and technologies to having a better understanding of a langauge at a lower level. It really made me appreciate the details a lot more and gave me more confidence when dealing with higher-level abstract languages like Swift.  " />
      
            </div>
        
    </div>
      ),
    },
    {
      title: "Databases",
      value: "databases",
      content: (
        <div className="md:mx-auto contain  border-full border-2 bg-white">
    
    <BlogCard
            imageUrls={["logos/mysql-logo.svg", "/logos/python.png"]}
            title="Databases"
            description="My understanding of back-end development expanded significantly once I delved into Python, despite its higher level of abstraction. Initially, it took some time to adjust to this new paradigm, but with persistence and practice, I gradually became accustomed to working with Python. Python's versatility and readability ultimately enhanced my development workflow, enabling me to tackle complex backend tasks with greater efficiency and confidence " />

        </div>
        
      ),
    },
   
  ];

 
 
  const items = [
 
    {
      title: "",
      description:  
        "Hi, I am a  Full Stack Developer with a keen eye for front-end developement. I enjoy the challenge of building projects and learning to grow as a developer. If I am not in front of a screen you will either find me WeightLifting,  BBQing or Sim Racing.",
      header: <Header name="Timothy Itayi" title="Full Stack Developer" />,
      className: "md:col-span-2 m-8",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "",
      description: "",
      header: <ImageWithHover src1="homeImages/headshot.jpeg" src2="homeImages/headshot2.jpeg" alt="Image" />,
      className: "md:col-span-1 m-8 justify-center",
      icon: "",
    },
  
  
  
  ];
  
  