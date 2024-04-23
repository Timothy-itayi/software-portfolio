
import Link from  'next/link';

const Navbar = () =>  {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-end ">
            <Link href="https://github.com/Timothy-itayi">
             <div className="text-gray-200 cursor-pointer h-16 pt-4 px-4"   >GitHub</div>
            </Link>

       <Link href="https://www.linkedin.com/in/timothy-itayi-ab8754138/">

                 <div className="text-gray-200 ml-4 cursor-pointer h-16 pt-4 px-4" >LinkedIn</div>
       </Link>
          </div>
        </div>
     
    </nav>
  );
}

export default Navbar
