// pages/index.js

import Head from 'next/head';
import NavBar from '../components/navbarComponent'
import Header from '../components/headerComponent';
import Card from '../components/cardComponent';
import Content from './content'
import ImageWithHover from '../components/imageComponent';



export default function Home() {
  return (
    <div className="bg-black">
      <Head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <NavBar/>
        
      <Header name="Timothy Itayi" title="Junior Front-End Developer" />

      <div className="flex justify-center  m-12 mb-6 ml-16">
      <ImageWithHover src1="/headshot.jpeg" src2="/headshot2.JPG" alt="Image" />
      </div>
   
      <Content/>
      <div className="flex justify-center">
  <div className="xl:container mx-auto px-6 m-12 mb">
    {/* Group Projects Section */}
    <div className="mb-16 md:w-2/3 lg:w-1/2">
      <h2 className="mb-4 text-2xl font-bold text-white  md:text-4xl">
       Personal Projects 
      </h2>
      <p className="text-white text-white">
        Here are some of my own projects I have worked on.
      </p>
    </div>
    <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* Group Project Cards */}
      <Card
        title="Project 1"
        description="Description of Project 1"
        imageUrl="/under.jpg"
        altText="Woman 1"
      />
      <Card
        title="Project 2"
        description="Description of Project 2"
        imageUrl="/under.jpg"
        altText="Woman 2"
      />
       <Card
        title="Project 3"
        description="Description of Project 2"
        imageUrl="/under.jpg"
        altText="Woman 2"
      />
             <Card
        title="Project 3"
        description="Description of Project 2"
        imageUrl="/under.jpg"
        altText="Woman 2"
      />
    </div>
  </div>
</div>

<div className="py-20">
  <div className="xl:container mx-auto px-6 md:px-12">
    {/* Group Projects Section */}
    <div className="mb-16 md:w-2/3 lg:w-1/2">
      <h2 className="mb-4 text-2xl font-bold text-white md:text-4xl">
       Group Projects 
      </h2>
      <p className="text-white">
        Here are some of my Group projects.
      </p>
    </div>
    <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-auto-fit xl:grid-cols-minmax(16rem, 1fr)">
   
      <Card
        title="Dev Academy Group Project"
        description="A restaurant web application designed to keep up with customer needs"
        imageUrl="/group1.png"
        altText="waitlessLogo"
        link="/waitless"
      />
      <Card
        title="CoffeeSnob"
        description="A  cafe app to help customers discover cafes in their area made with Swift"
        imageUrl="/coffeesnobLogo.png"
        altText="Woman 1"
        link="/coffeeSnob"
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
