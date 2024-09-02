import Link from 'next/link';


const Navbar = ({ scrollToProjects }) => {

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex animate-fade-up justify-between flex-row">
        <ul className="flex">
          <li>
            <Link href="/">
              <button className="py-4 px-6 text-white bg-white hover:filter invert transition duration-300 ease-in-out ">
                <img src='homeImages/home.png' className="h-6 filter invert" alt="homeLogo" />
              </button>
            </Link>
          </li>
        </ul>
        <ul className="flex">
          <li>
            <Link href="https://github.com/Timothy-itayi">
              <button className="py-4 px-5 text-black  transition duration-300 ease-in-out" >
                <img src='homeImages/git-con.png' className="h-7 filter invert object-cover " alt="GitHub Logo" />
              </button>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/timothy-itayi-ab8754138/">
              <button className="py-5 px-6 text-white   transition duration-300 ease-in-out ">
                <img src='homeImages/linkedin.png' className="h-6 object-cover " alt="LinkedIn Logo" />
              </button>
            </Link>
          </li>
          <li>
            <button className="py-5 px-3 text-white bg-black transition duration-300 ease-in-out " onClick={scrollToProjects}>
              <span className="text white h-5 body-text text-xl ">Projects</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

          export default Navbar;