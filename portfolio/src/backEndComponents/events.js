// data/events.js
const events = [
    { title: 'The Initial Idea', 
    description: 'After getting through to the end of the  cs50x course I was tasked to make a final project. I had no real clue what I wanted to do except to create something that was new and fresh and I remembered that my girlfriend who is a product designer had a protoype that she created recently  that I could potentially build. Given my experience and that I was the only developer working on this project I made sure to give myself a deadline of 1 month. ',
     date: '13/3/24',
      images: [
            {url: '/under.jpg', alt: 'Under'}
      ]},

    { title: 'The Prototype', 
    description: 'The prototype included  an array of features from authentication, filtering by coffee preferences, a rendered map and a routing system to get the user from point A to point B,  So I  bit the bullet and took it on. After a few days of tinkering with the environment setup I was away with the build.... ', 
    date: '13/3/24',
     images: [
        {url: '/coffeeImages/route.png', alt:'prototype'}]},

    { title: 'Challenges',
     description: 'After 2 weeks of building with React and Expo I later found them limiting in scope as they could not provide an adequate system for creating for IOS. I soon had to rebuild the application from scratch again this time using XCode and Swift. This seemed the best option and with only 2 more weeks to finish my project I needed to learn quickly. ',
      date: '27/3/24' , 
      images: [
         {url: '/coffeeImages/coffee-react.PNG', alt: 'reactSnob'}]},

    { title: 'Apple Development',
     description: 'I had to humble my self and take a new approach to the way I was going to rebuild CoffeeSnob. I knew I only had 2 weeks to go and I could not step in with the same presuppositions from before and so I took the rudimentary approach and brainstormed and decided to focus on 2 features which were; render a map and make it interactive and display cafe cards.  I found TomTomMaps for IOS a great tool to use though very restrictive in its methodology I did found it very useful as a learning tool.   ', 
     date: '29/3/24',
      images:
      [
        {url:'/coffeeImages/xcodeIcon.png', alt: 'xcodeLogo'},
        {url:'/coffeeImages/Tomtom.png', alt: 'TomtomLogo'}  ]
     },

    { title: 'The Rebuild',
     description: 'It was not easy diving into a new environment whilst also learning a new language but I thought why not. I had nothing to lose. So after watching some tutorials on the basics of SwiftUi  and reading the documentation from TomtomMaps I was able to tick off half of the list of features I wanted to build in the rebuild because I was honest with my self about what was achieveable in the short time frame.',
      date: '4/4/24',
      images: [
        {url:'/coffeeImages/rebuild.JPG', alt: 'rebuild' },
              ],
    },
     
      

    { title: 'Welcome to CoffeeSnob ', 
    description: 'I am grateful for how the app turned out, though I can say it is not exactly like the prototype, However, I do believe I have gained an understanding of what this app could become with further development and the support of a team. Working on this project gave me a new apprecitiation for mobile developers, Working on this project has given me a new appreciation for mobile developers; it is no easy feat, but I am glad to have learned so much in such a short amount of time. ',
     date: '12/4/24',
    images: [
      
      {url: '/coffeeImages/alert.png'},
      {url: '/coffeeImages/coffeeRoaster.png'},
      ,
    
    ]
    },

    
];

export default events;
