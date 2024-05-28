const f1events = [
    { title: 'Inspired By', 
    description: ' The initial idea actually came from a website called P10, a Formula 1 fantasy league web application that allows users to select which driver would not finish a race (DNF) or select which driver would get to P10. The website was using an API called OpenF1 Api. A free in depth API that displays Real Time formula 1 Data. This ranged from radio messages, Drivers and Constructors Standings and much more. ',
  
      images: [
            {url: 'logos/openF1-logo.png', alt: 'OpenF1'}
      ]},
      { title: 'Planning', 
      description: 'After a few hours of researching I decided to give myself a week deadline to plan, develop and deploy the web application. So I went to the white board to plan out my routes and pages. I also decided to test some technologies that I had never used in a project before. So I went about working with Python to develop the backend Api route and Jinija for the frontend.  ',
    
        images: [
              {url: 'GrandprixImages/planningGP.png', alt: 'white-board'}
        ]},

        { title: 'Open and Closed ', 
            description:''       ,
          images: [
                {url: 'GrandprixImages/python-project-1.png', alt: 'python1'},
               
          ]},
    
          { title: '', 
          description: 'After the planning stage I wanted to test out the OpenF1 APi and see if I could use it. I found out quite quickly from the response data that it would not be easy to display the kind of information I wanted to display. This would mean I would need to use a new API all together and take a look at the response data to see if it would be easy to work with. I ended up utilising another API that produced the same real time F1 data called HyperRace Api from RapidAPi.com ',
          images: [
                  {url: 'GrandprixImages/python-project-2.png', alt: 'python2'},
                 
            ]},
      
          { title: 'Rebuild ', 
            description: 'After I realised the potential of HyperRace API, I decided to fully commit to utilising it in my project. I created a React Template and started to develop the application. I started with configuration of the back-end with NodeJs making sure to create my server endpoint and apiRoutes along with functions to fetch the data. Once that was established I went about creating the apiClient to accompany the backend server code. This made it much easier to develop the frontend. Shortly after that I was able to utilise the OpenF1 API which was used to display driver detail. ',
             images:[   {url: 'logos/react.png', alt: 'reactLogo'},
             {url: 'logos/javascript.png', alt: 'javaScriptLogo'},
      
                  
            ]},
    ]

    export default f1events