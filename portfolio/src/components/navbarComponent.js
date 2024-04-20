import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side buttons */}
          <div className="flex">
            <button className="text-white">Button</button>
            
          </div>

          {/* Right side buttons */}
          <div className="flex">
          
            <button className="text-white ml-4">Projects</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
