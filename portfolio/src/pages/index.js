// pages/index.js

import Head from 'next/head';
import NavBar from '../components/navbarComponent'
import Header from '../components/headerComponent';
import Card from '../components/cardComponent';
import Content from './content'


export default function Home() {
  return (
    <div>
      <Head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <NavBar/>
      <div className="flex justify-center m-12 mb-6">
      <div className="overflow-hidden rounded-full h-48 w-48 grayscale-100 hover:grayscale-0 hover:scale-120 transition-transform"> 
      <img src="/headshot.jpeg" alt="Image" className="min-w-full min-h-full "  loading="lazy" />
      </div>
      </div>
     
      <Header name="Timothy Itayi" title="Junior Front-End Developer" />

      <Content/>
      <div className="py-20">
  <div className="xl:container mx-auto px-6 md:px-12">
    {/* Group Projects Section */}
    <div className="mb-16 md:w-2/3 lg:w-1/2">
      <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Group Projects
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Here are some of my group projects I have worked on.
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
    </div>
  </div>
</div>
<div className="py-20">
  <div className="xl:container mx-auto px-6 md:px-12">
    {/* Personal Projects Section */}
    <div className="mb-16 md:w-2/3 lg:w-1/2">
      <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Personal Projects
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Here are some of my personal projects.
      </p>
    </div>
    <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-auto-fit xl:grid-cols-minmax(16rem, 1fr)">
      {/* Personal Project Cards */}
      <Card
        title="Project 3"
        description="Description of Project 3"
        imageUrl="/under.jpg"
        altText="Man"
      />
      <Card
        title="Project 4"
        description="Description of Project 4"
        imageUrl="/under.jpg"
        altText="Woman 1"
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
