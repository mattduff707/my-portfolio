import testPic from './images/strength.png';
import testPicTwo from './images/image1.jpeg';
import hubDesignImage from './images/hubDesign.jpg';
import hubDrawingImage from './images/hubDrawing.jpg';
import hubLiveImage from './images/hubLive.png';
import fiveBookImage from './images/fiveBook.jpg';
import fiveAppImage from './images/fiveApp.png';
import fiveCodeImage from './images/fiveCode.png';
import testPicThree from './images/image1.jpeg';

export const aboutData = [
  {
    title: 'Strength Coach',
    text: `I've been an avid strength training enthusiast for about 5 years now (with a year-long pause due to COVID-19).
       I worked as a strength coach in Chicago for just over a year. This was my first dip into self-education as I
       learned the necessary material for my training certification. Learning how to learn played a key role in my web development journey, and it started here.
        Acting as an educator for those taking their first steps into the intimidating world of fitness and health was humbling and inspiring. 
         Although I no longer pursue strength training as a career, it will forever be a passionate hobby of mine. Yeah, buddy! `,
    picture: testPic,
  },
  {
    title: 'Computer Enthusiast',
    text: `There are few things that I am more passionate about than computing. It is my comfort zone. I was privileged to have a father who was keeping up during the digital revolution; 
     he bought his first home computer in the early 80s. In a way, it seemed preordained that I would also become an enthusiast through his influence.
      YouTube has been a major source of entertainment and education throughout my life, especially during this professional transition. I have been an avid PC gamer since the age of 5,
     living vicariously through Pajama Sam is where the interest sparked. My favorites along the way include Diablo 2, Rocket League, and World of Warcraft.`,
    picture: testPicTwo,
  },
  {
    title: 'Advocate',
    text: `I am constantly searching for ways to play my part in improving the world we share.
     Knowing the lives of others may be positively impacted by my decisions today fuels me to take the necessary actions to ignite change.
     That extends to my interest in web development. I have a keen interest in specializing in accessibility going forward.
     My mother has dedicated her life to assisting those in the disabled community.
     She was an ASL interpreter for 18 years and now works as a home care provider for people with mental/physical disabilities.
     As an inspiration to me, I aspire to achieve even a fraction of the impact she has made in people's lives.
     `,
    picture: testPicThree,
  },
];
export const projectsData = [
  {
    path: '/projects/the-hub',
    github: 'https://github.com/mattduff707/the-hub',
    live: 'https://peaceful-rosalind-3ff916.netlify.app',
    showcase: true,
    title: 'The Hub',
    subtitle: 'Sci-fi landing page',
    stack: ['React', 'styled components', 'PrismJs', 'NASA APOD API'],
    description: `This is my browser landing page with all sorts of fun features built in already with more planned for the future.
     Task management, Search the MDN Docs, and NASA's picture of the day are just a few features of this app.

     `,
    slides: [
      {
        title: 'The Process',
        text: `A love for sci-fi and the educational YouTube channel Kurzgesagt – In a Nutshell is what inspired this project.
         The concept of a feature rich browser homepage stems from my desire to take existing ideas and tailor them to my needs to increase my own productivity.
         I sketched a ROUGH design on paper then jumped on Figma to create a simple design.
          From there I broke it down into tasks to create a consistant productive workflow.
         `,
        image: hubDrawingImage,
      },
      {
        title: 'Key Feature',
        text: `This app is built for productivity, that's why I have built-in a task management system.
         It is fairly simple for now but this project will continue to expand.
          As of now tasks can be created and edited with the state saved to window.localStorage so tasks persist between sessions.
          I plan to add an ordering system, a time tracker and a history system.
           I have also set up a nifty search feature for the bookmark section that allows you to quickly search anything on the MDN Docs!`,
        image: hubDesignImage,
      },
      {
        title: `What's Next`,
        text: `I have a lot in store for this app.
         A snippets library, mental math game to keep the mind sharp, and a bug report library so no problems trip me up twice.
          I plan to continue to work on this app until I have built it into what I had imagined from the start!`,
        image: hubLiveImage,
      },
    ],
  },
  {
    path: '/projects/5-3-1',
    github: 'https://github.com/mattduff707/5-3-1',

    title: '5/3/1 Calculator',
    showcase: true,
    subtitle: 'Lifting protocol calculator',
    stack: ['React', 'styled components'],
    description: `A calculator for the famous 5/3/1 lifting program, my personal favorite.
     It was an enjoyable jump into controlled inputs and another app that I use frequently.`,
    slides: [
      {
        title: 'The Process',
        text: `I created this app so I could finally have a quick and convenient way to get my lifting numbers each week (Refer to the README for a quick rundown on how the 5/3/1 works if you are interested).
          I focused on trying to make this as dynamic and scalable as I could through the use of functional programming principles.
         `,
        image: fiveBookImage,
      },
      {
        title: 'Key Feature',
        text: `This app has controlled inputs utilizing Reacts useState hook. On each input is a function that ensures only numbers can be entered into the inputs.
         This was achieved by creating multiple smaller conditional functions that combine to prevent an invalid input value.`,
        image: fiveCodeImage,
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
    path: '/projects/portfolio',
    github: 'https://github.com/mattduff707/my-portfolio',
    showcase: true,
    title: 'Portfolio',
    subtitle: 'This darling portfolio',
    stack: ['React', 'Framer Motion', 'styled components', 'Responsive'],
    description: 'Did I spend too much time working on this portfolio? Yes. Do I regret it? No!',
    slides: false,
  },

  {
    path: '/projects/duffy-web-brain-three',
    github: 'https://github.com/mattduff707/matt-blog',
    title: 'Duffy Web Brain',
    subtitle: 'Personal notes app',
    stack: ['React', 'Gatsbyjs', 'PrismJs'],
    description:
      "Throughout most of my self education I had not been utilizing any solid not taking methodology. Learning in the IDE wasn't cutting it, so I made my own solution!",
    slides: false,
  },
];
