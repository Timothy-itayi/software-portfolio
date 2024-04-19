// pages/index.js

import Head from 'next/head';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Projects from '../components/projects';

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Head>
        {/* Head content */}
      </Head>

      <Navbar />

      <div className="center-container">
        <div className="stack-container">
          {/* Images */}
        </div>
      </div>

      <Header />

      <Projects />

      {/* Footer */}
      {/* Footer content */}

      {/* Scripts */}
      {/* JavaScript scripts */}
    </div>
  );
}
