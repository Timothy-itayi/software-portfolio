
import Navbar from '../homeComponents/navbarComponent';
import Header from '../homeComponents/headerComponent';
import LayoutComponent from '../grpComponents/layoutComponent'
import BodyLayout from '../grpComponents/bodyLayoutComponent';
import Card from '../grpComponents/coffeeComponent';
import Timeline from '../grpComponents/timelineComponent';
import events from '../backEndComponents/events';


const Coffee = () => { 

  

    return (

    <><><div className="bg-black">

            <Navbar />
            <Header title="CoffeeSnob" name="An IOS app designed to help people discover cafes in their area." />
            <div className="flex justify-center m-10 mb-6 animate-fade-up  ">
                <LayoutComponent style={{ fontSize: '24px', color: 'white', fontFamily: 'Inter-Regular', paddingLeft: 32 }}>
                    This Project was created as a final assignment for Harvard's Intro to Computer Science Course for CS50 2024.
                </LayoutComponent>
            </div>
        </div>
            <BodyLayout>
                <Card
                    imageUrls={[
                        "coffeeImages/snack.png",
                        "coffeeImages/reactLogoBlk.png",
                        "coffeeImages/jsLogo.png",
                        "coffeeImages/cslogowhite.png",
                    ]}
                    title="Can coffee make you a better developer?"
                    description="Coffeesnob was initially built using React-Native, with expo. This was my first time making an entire project from scratch and so I thought to get the help from my girlfriend Gracie to help me design it. Having already worked in the industry as a Product Designer for several years , it  was nice to get some insight on how to work with  and better understand what that professional relationship would be like. With that out of the way let me walk you through how an ambitious idea to create a social app for coffee lovers from a figma prototype  made  in 2021 turned into a very humbling exeprience filled with an appreciation for good design and user experience.... " />


            </BodyLayout>
            </>
         
            <div className={"animate-fade-up"}>
                <Timeline events={events} />
            </div>
            </>
      
    )

}

export default Coffee; 
