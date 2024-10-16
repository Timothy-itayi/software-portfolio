import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black">
        <div className="max-w-screen-xl  mx-auto px-4 py-2 flex animate-fade-up justify-between flex-row">
          <ul className="flex ">
          <li>
              <Link href="/">           
                <button className="py-4 px-5 text-white bg-black  transition duration-300 ease-in-out ">
                <img src='homeImages/home.png' className=" h-6" alt="homeLogo" />
                </button>
              </Link>
            </li>
            </ul>
            <ul className="flex">
            <li>
              <Link href="https://github.com/Timothy-itayi">
                <button className="py-4 px-5 text-white bg-black  transition duration-300 ease-in-out" >
                <img src='homeImages/git-con.png' className="h-7 " alt="GitHub" />
                  </button>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/timothy-itayi-ab8754138/"> 
                <button className="rounded-br-lg py-5 px-6  text-white bg-black transition duration-300 ease-in-out ">
                <img src='homeImages/linkedin.png' className="h-5 filter invert" alt="LinkedIn" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}
export default Navbar;