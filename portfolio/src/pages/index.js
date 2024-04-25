// pages/index.js

import Head from 'next/head';
import NavBar from '../homeComponents/navbarComponent'
import Header from '../homeComponents/headerComponent';
import Card from '../homeComponents/projectCardComponent';
import Content from './content'
import ImageWithHover from '../homeComponents/imageComponent';
import BlogCard from '../homeComponents/blogCardComponent';


export default function Home() {
  return (
    <div className="bg-black">
      <Head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <NavBar/>
        
  

    
  
      <Header name="Timothy Itayi" title="Front-End Developer" />

<div className="flex justify-center animate-fade-up m-12 mb-6 ml-16">
<ImageWithHover src1="/headshot.jpeg" src2="/headshot2.jpeg" alt="Image" />
</div>

<Content/>

<div className="py-6 flex flex-wrap gap-4 justify-center  ">
<h2 className="mb-4  text-center text-2xl font-bold text-white  md:text-4xl">
       Here is what I have learned  during my time at Dev Academy 
      </h2>
  <div className="md:mx-auto container p-2  m-12 mb " >
  <BlogCard
        imageUrls=
         {["/coffeeImages/reactLogoBlk.png",
       "/type.png",
      "/nextLogo.svg"]}
        title="React"
        description="After a year of coding with React It's safe to say I am fairly comfortable with it and can create whatever I want in a reasonable time. However everytime I make a new  project  with it I am always humbled by what I do not know and am always looking to grow as a developer."

      />
     
      <BlogCard
        imageUrls={[
          "/logos/css.png",
          "/logos/hTml.png",
                   
                     "/logos/javascript-logo.png"]}
        title="CSS , Html & Javascript"
        description="Learning the rudimentary principles is your one stop shop to creating whatever you want. I have learned a lot with these methods when it has come to building websites even from the beginner stage. I am very confident in my abilities with these but I always know I have more room for improvement."
      />
        <BlogCard
        imageUrls={[
          "/logos/nodejs-icon.png",
          "/logos/sqlite3-icon.png",
          "/logos/Git_icon.png",
                   
                   ]}
        title="Back-end Technologies"
        description="As much as I enjoy Front-end for its flair I needed to grasp the back-end portion of this discipline and not be seen as a one trick pony. So Dev Academy provided me and my cohort with the necessary tools to learn as much as we could on setting up our envrionments with commandLine Tools to utilising databases in projects and learning to test code our  through continuous intergration. "
      />
    
    </div>
 
  </div >
     
     <div className="py-6 flex flex-wrap gap-4 justify-center  ">
      <h2 className="mb-4  text-center text-2xl font-bold text-white  md:text-4xl">
        Here is what I have learned from Harvard's Intro to Computer Science Course
      </h2>
      <div className="md:mx-auto container p-2  m-12 mb ">
      <BlogCard
        imageUrl="/htmlncss.png"
        title=""
        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      />
             <BlogCard
        imageUrl="/htmlncss.png"
        title="HTML & CSS"
        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      />
              <BlogCard
        imageUrl="/htmlncss.png"
        title="HTML & CSS"
        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      />
    
      </div>
    
     </div>
 
 


<div className="py-5  flex justify-center  ">
  <div className="xl:container mx-auto px-6 m-12 mb ">
    <div className="mb-16 md:w-2/3 lg:w-1/2 ">
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
        altText="Woman 1"
        link = "/coffeesnob"
       />
        
      </div>
  </div>
</div>

  

      <footer>
        <p>&copy; {new Date().getFullYear()} Timothy itayi</p>
      </footer>
    </div>
  );
}
