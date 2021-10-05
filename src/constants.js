import StrengthImage from "./images/strength.png";
import hubDesignImage from "./images/hubDesign.jpg";
import hubDrawingImage from "./images/hubDrawing.jpg";
import hubLiveImage from "./images/hubLive.png";
import fiveBookImage from "./images/fiveBook.jpg";
import fiveAppImage from "./images/fiveApp.png";
import fiveSketch from "./images/fiveSketch.jpg";
import alissaDog from "./images/alissaDog.jpg";
import computerDog from "./images/computerDog.jpg";
import timelineChart from "./images/timelineChart.jpg";
import timelineSketch from "./images/timelineSketch.jpg";
import timelineLive from "./images/timelineLive.png";

export const aboutData = [
  {
    title: "Strength Coach",
    text: `I've been an avid strength training enthusiast for about 5 years now (with a year-long pause due to COVID-19).
       I worked as a strength coach in Chicago for just over a year. This was my first dip into self-education as I
       learned the necessary material for my training certification. Learning how to learn played a key role in my web development journey, and it started here.
        Acting as an educator for those taking their first steps into the intimidating world of fitness and health was humbling and inspiring. 
         Although I no longer pursue strength training as a career, it will forever be a passionate hobby of mine. Yeah, buddy! `,
    picture: StrengthImage,
  },
  {
    title: "Computer Enthusiast",
    text: `There are few things that I am more passionate about than computing. It is my comfort zone. I was privileged to have a father who was keeping up during the digital revolution; 
     he bought his first home computer in the early 80s. In a way, it seemed preordained that I would also become an enthusiast through his influence.
      YouTube has been a major source of entertainment and education throughout my life, especially during this professional transition. I have been an avid PC gamer since the age of 5,
     living vicariously through Pajama Sam is where the interest sparked. My favorites along the way include Diablo 2, Rocket League, and World of Warcraft.`,
    picture: computerDog,
  },
  {
    title: "Advocate",
    text: `I am constantly searching for ways to play my part in improving the world we share.
     Knowing the lives of others may be positively impacted by my decisions today fuels me to take the necessary actions to ignite change.
      This has manifested in a strong drive to combat global climate change.
     It also extends to my interest in web development. I have a keen interest in specializing in accessibility going forward.
     My mother has dedicated her life to assisting those in the disabled community.
     She was an ASL interpreter for 18 years and now works as a home care provider for people with mental/physical disabilities.
     As an inspiration to me, I aspire to achieve even a fraction of the impact she has made in people's lives.
     `,
    picture: alissaDog,
  },
];
export const projectsData = [
  {
    path: "/projects/the-hub",
    github: "https://github.com/mattduff707/the-hub",
    live: "https://musing-mirzakhani-92616b.netlify.app",
    showcase: true,
    title: "The Hub",
    subtitle: "Sci-fi landing page",
    stack: ["React", "styled components", "PrismJs", "NASA APOD API"],
    description: `This is my browser landing page with all sorts of fun features built in already with more planned for the future.
     Task management, Search the MDN Docs, and NASA's picture of the day are just a few features of this app.

     `,
    slides: [
      {
        title: "The Process",
        text: `A love for sci-fi and the educational YouTube channel Kurzgesagt – In a Nutshell is what inspired this project.
         The concept of a feature rich browser homepage stems from my desire to take existing ideas and tailor them to my needs to increase my own productivity.
         I sketched a ROUGH design on paper then jumped on Figma to create a simple design.
          From there I broke it down into tasks to create a consistant productive workflow.
         `,
        image: hubDrawingImage,
      },
      {
        title: "Key Feature",
        text: `I have a weird affinity for mental math, it's a fun challenge and promotes critical focused thought patterns.
         Creating a game for it is a lot easier than continuing to pester my partner for two numbers to multiply.
          With several challenges to tackle, this has been my favorite implementation yet!
           Multiple settings to choose from, a countdown timer, dynamic scoring, instant feedback on answer, and cursor control were the main set of features I wanted in this first iteration of the game.`,
        image: hubDesignImage,
      },
      {
        title: `What's Next`,
        text: `I am currently in the process of implementing an express/node backend and MongoDB to make this a full stack application.
         I am more than excited for the future of this app, my productivity will only grow as this tool becomes more powerful.
          Stay tuned because the snippets library is already well underway!`,
        image: hubLiveImage,
      },
    ],
  },
  {
    path: "/projects/actor-timeline",
    github: "https://github.com/mattduff707/actor-timeline",
    live: "https://gracious-kalam-94632e.netlify.app/",
    showcase: true,
    title: "Actor Timeline",
    subtitle: `Timeline of an actor's movie career`,
    stack: ["React", "styled components", "TMDB API", "Responsive"],
    description: `As a film enthusiast, I had been eager to create an app that utilizes a movie database API.
     This was a fun chance to showcase my proficiency working with a third party API and manipulating the data fetched from it. `,
    slides: [
      {
        title: "The Process",
        text: `Movies are one of my favorite topics of discussion and something I consider to be a hobby of mine.
        So when I decided to create an app that was meant to showcase my proficiency with API's I naturally gravitated toward a movie database.
         I followed my usual process of drawing a rough sketch then creating a simple design on figma.
          From there I mapped out the flow of data from the top level, down to the bottom of the tree. 
          This was great practice for my software design and architecture process.
         `,
        image: timelineSketch,
      },
      {
        title: "Key Feature",
        text: `The feature set of this app is pretty straight forward, but I would like to shine a spotlight on the yearly navigation.
         This was achieved by comparing each movie role release date to the previous role's release date when mapping over the array of movie roles.
          Then conditionally render a "year" component if the previous role was released during an earlier year.
           The navbar was simply created by iterating over that same movie roles array to filter out all but one instance of each year, then sorting that array by ascending value.
           Finally we map the remaining array into navigation link components!
           `,
        image: timelineChart,
      },
      {
        title: `What's Next`,
        text: `If I end up jumping back into this project I would like to figure out a way to include an actor's TV credits into the timeline.
         Based on the API it didn't seem possible since the TV credits query returned the release date of the show and not the date of the actors appearance on the show.
         But who knows what is possible as my scope of knowledge continues to expand in the field. `,
        image: timelineLive,
      },
    ],
  },
  {
    path: "/projects/5-3-1",
    github: "https://github.com/mattduff707/5-3-1",

    title: "5/3/1 Calculator",
    showcase: true,
    live: "https://focused-mestorf-79f5dc.netlify.app/",
    subtitle: "Lifting protocol calculator",
    stack: ["React", "styled components"],
    description: `A calculator for the famous 5/3/1 lifting program, my personal favorite.
     It was an enjoyable jump into controlled inputs and another app that I use frequently.`,
    slides: [
      {
        title: "The Process",
        text: `I created this app so I could finally have a quick and convenient way to get my lifting numbers each week (Refer to the README for a quick rundown on how the 5/3/1 works if you are interested).
          I focused on trying to make this as dynamic and scalable as I could through the use of functional programming principles.
         `,
        image: fiveBookImage,
      },
      {
        title: "Key Feature",
        text: `This app has controlled inputs utilizing Reacts useState hook. On each input is a function that ensures only numbers can be entered into the inputs.
         This was achieved by creating multiple smaller conditional functions that combine to prevent an invalid input value.`,
        image: fiveSketch,
      },
      {
        title: `What's Next`,
        text: `I will certainly jump back into this project in the near future to expand upon it.
         I would like to implement the option for the user to add/remove lifts and change the calculation percentages.
          I would like to make it responsive as well so it can be used on mobile at the gym.`,
        image: fiveAppImage,
      },
    ],
  },
  {
    path: "/projects/portfolio",
    github: "https://github.com/mattduff707/my-portfolio",
    showcase: false,
    title: "Portfolio",
    subtitle: "This darling portfolio",
    stack: ["React", "Framer Motion", "styled components", "Responsive"],
    description: `Design isn't what I strive to do, but I do enjoy injecting my own creativity into my personal projects. My portfolio is no exception. I hope you like gradients and icons.`,
    slides: false,
  },

  {
    path: "/projects/duffy-web-brain",
    github: "https://github.com/mattduff707/matt-blog",
    live: "https://www.duffy-web-brain.com/posts",
    title: "Duffy Web Brain",
    subtitle: "Personal notes app",
    stack: ["React", "Gatsbyjs", "PrismJs"],
    description:
      "Throughout most of my self education I had note been utilizing any solid not taking methodology. Learning in the IDE wasn't cutting it, so I made my own solution!",
    slides: false,
  },
];
