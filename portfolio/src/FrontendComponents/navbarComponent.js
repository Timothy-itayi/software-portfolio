import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black">
        <div className="max-w-screen-xl mx-auto px-4 py-5  flex justify-start">
          <ul className="inline-flex">
            <li>
              
              <Link href="https://github.com/Timothy-itayi">
                <button className=" block py-4 px-4 text-white bg-black hover:bg-gray-300 transition duration-300 ease-in-out" >
                <img src='logos/github.png' className="h-7" alt="GitHub Logo" />
                
                  </button>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/timothy-itayi-ab8754138/">
                
                <button className="block py-4 px-6  text-white bg-black hover:bg-gray-300 transition duration-300 ease-in-out ">
                <img src='logos/link.png' className="h-6 filter invert" alt="LinkedIn Logo" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      
    </nav>
  );
}

export default Navbar;
