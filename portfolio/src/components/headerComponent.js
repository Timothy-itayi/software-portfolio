

export default function Header({ name, title }) {


  return (
    <div className={"flex  flex-col items-center justify-center pt-8"}>
      <h1 className="text-4xl font-extrabold dark:text-white header-font mb-10">{title}</h1>
      <h2 className="   text-gray-400 mt-2" style={{fontFamily: 'name-font', fontSize: '25px'}}>{name}</h2>
    </div>
  );
}
