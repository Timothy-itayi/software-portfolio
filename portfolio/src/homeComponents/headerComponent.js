
const Header = ({ name, title }) =>  {


  return (
    <div className={"flex flex-col justify-center items-center animate-fade-up pt-10  "}>
      <div>
      <h1 className="text-4xl font-extrabold text-white header-font  text-center">{title}</h1>
      </div>
    <div> 
      <h2 className="  text-gray-400 mt-2 text-center" style={{fontFamily: 'name-font', fontSize: '25px'}}>{name}</h2>
      </div>
      </div>
  );
}
export default Header