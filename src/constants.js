import testPic from "./images/backgroundUs.jpg";
import testPicTwo from "./images/image0.jpeg";
import testPicThree from "./images/image1.jpeg";

export const aboutData = {
  devObj: [
    {
      active: false,
      title: "Self Taught Developer",
      text: `I embarked on this self learning journey about 2 years ago while working as a strength coach in Chicago.
         A regular in my weekly strength classes helped plant the idea of web development as a new career for me, himself being a full-stack software developer.
         Soon after that I eagerly started my first lessons online through sources like: FreeCodeCamp, PluralSight, and Dev blogs.
         Since then we have continued a great friendship and often link up online to discuss all things life and of course, code.         
         It is through this influence that I always hold myself to the highest standard of programming that I am capable of!`,
      picture: testPic,
    },
    {
      active: false,
      title: "Why I got into Web Development",
      subtitle: "A computer nerd finds his passion",
      text: "I didn't even know it was an option...",
      picture: testPicTwo,
    },
    {
      active: false,
      title: "My ambitions",
      subtitle: "What I want to achieve",
      text: "I plan to achieve this...",
      picture: testPicThree,
    },
  ],
  personObj: [
    {
      active: false,
      title: "Strength Training",
      text: `I've been an avid strength training enthusiast for about 5 years now (With a year-long pause due to COVID-19).
         In fact I worked as a strength coach in Chicago for just over a year.
          It was during my time as a trainer that I caught wind of web development as a career from one of my clients, and the rest is history.
           Though I no longer pursue strength training as a career, it will likely forever be a passionate hobby of mine.`,
    },
    {
      active: false,
      title: "Person I got into Web Development",
      subtitle: "A computer nerd finds his passion",
      text: "I didn't even know it was an option...",
    },
    {
      active: false,
      title: "Person ambitions",
      subtitle: "What I want to achieve",
      text: "I plan to achieve this...",
    },
  ],
};

export const projectsData = [
  {
    path: "/projects/duffy-web-brain-one",
    title: "Duffy Web Brain 1",
    subtitle: "Personal notes app",
    stack: ["React", "Gatsbyjs", "PrismJs"],
    description:
      "Throughout most of my self education I had not been utilizing any solid not taking methodology. Learning in the IDE wasn't cutting it, so I made my own solution! asjdh aksjdh aksjd akjshd kajshd kjakajksjk akhsjdkjahsh sjhdjs jshdjsh",
    slides: [
      {
        title: "Overview",
        text: "I made this project for this reason... asdasdasd asd asd sdwqd qwd qwd qwdqw dqwdqwd qdwd qwd qwd qwdasd asd asd asd asd  asd asd ads asd asd ",
        image: testPic,
      },
      {
        title: "Core Functionality",
        text: "This is some of the logic I programmed and how the app works",
        image: testPicTwo,
      },
      {
        title: "Spotlight",
        text: "This is the feature I am most proud of... This is the biggest challenge I overcame",
        image: testPicThree,
      },
    ],
  },
  {
    path: "/projects/duffy-web-brain-two",
    title: "Duffy Web Brain 2",
    subtitle: "Personal notes app",
    stack: ["React", "Gatsbyjs", "PrismJs", "Tester", "Long Stack Item"],
    description:
      "Throughout most of my self education I had not been utilizing any solid not taking methodology. Learning in the IDE wasn't cutting it, so I made my own solution!",
    slides: [
      {
        title: "Overview",
        text: "I made this project for this reason...",
        image: testPic,
      },
      {
        title: "Core Functionality",
        text: "This is some of the logic I programmed and how the app works",
        image: testPicTwo,
      },
      {
        title: "Spotlight",
        text: "This is the feature I am most proud of... This is the biggest challenge I overcame",
        image: testPicThree,
      },
    ],
  },
  {
    path: "/projects/duffy-web-brain-three",
    title: "Duffy Web Brain 3",
    subtitle: "Personal notes app",
    stack: ["React", "Gatsbyjs", "PrismJs"],
    description:
      "Throughout most of my self education I had not been utilizing any solid not taking methodology. Learning in the IDE wasn't cutting it, so I made my own solution!",
    slides: [
      {
        title: "Overview",
        text: "I made this project for this reason...",
        image: testPic,
      },
      {
        title: "Core Functionality",
        text: "This is some of the logic I programmed and how the app works",
        image: testPicTwo,
      },
      {
        title: "Spotlight",
        text: "This is the feature I am most proud of... This is the biggest challenge I overcame",
        image: testPicThree,
      },
    ],
  },
];

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1920px",
  desktopL: "2560px",
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};
