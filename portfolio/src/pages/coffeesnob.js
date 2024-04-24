
import Navbar from '../homeComponents/navbarComponent';
import Header from '../homeComponents/headerComponent';
import LayoutComponent from '../grpComponents/layoutComponent'
import BodyLayout from '../grpComponents/bodyLayoutComponent';
import Card from '../grpComponents/coffeeComponent';
const Coffee = () => { 

    return (

    <div className= "bg-black">

      <Navbar />
      <Header title="CoffeeSnob" name="An IOS app designed to help people discover cafes in their area" />
      <div className="flex justify-center m-10 mb-6 animate-fade-up  ">
      <LayoutComponent style={{ fontSize: '24px', color: 'white', fontFamily: 'Inter-Regular', paddingLeft: 32 }}>
    This Project was created as a final assignment for Harvard's Intro to Computer Science Course for CS50 2024. 
      </LayoutComponent>
   </div>

   <BodyLayout>
      <Card
        imageUrl="grp2Images/snack.png"
        imageUrl2='grp2Images/reactCoffee.png'
        title="Can coffee make you a better developer?"
        description=""
        author="Developed By: Timothy Itayi"
        author2="Designed By: Gracie Sharkey"
        date="Aug 18"
      />
      {/* Add more Card components here as needed */}
    </BodyLayout>
</div>
      
    )

}

export default Coffee; 