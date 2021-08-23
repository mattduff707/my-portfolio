import testPic from './images/strength.png';
import testPicTwo from './images/image0.jpeg';
import testPicThree from './images/image1.jpeg';

export const aboutData = [
  {
    title: 'Strength Training',
    text: `I've been an avid strength training enthusiast for about 5 years now (With a year-long pause due to COVID-19).
       In fact I worked as a strength coach in Chicago for just over a year. This was my first dip into self education as I
       learned the necessary material for my training certification.
        It was during my time as a trainer that I caught wind of web development as a career from one of my clients. 
        From then on, I was much more interested in the mental sweat of code! 
         Though I no longer pursue strength training as a career, it will forever be a passionate hobby of mine.`,
    picture: testPic,
  },
  {
    title: 'Person I got into Web Development',
    subtitle: 'A computer nerd finds his passion',
    text: "I didn't even know it was an option...",
    picture: testPicTwo,
  },
  {
    title: 'Person ambitions',
    subtitle: 'What I want to achieve',
    text: 'I plan to achieve this...',
    picture: testPicThree,
  },
];
export const projectsData = [
  {
    path: '/projects/the-hub',
    title: 'The Hub',
    subtitle: 'Sci-fi Landing page',
    stack: ['React', 'Gatsbyjs', 'PrismJs'],
    description:
      "Throughout most of my self education I had not been utilizing any solid not taking methodology. Learning in the IDE wasn't cutting it, so I made my own solution! asjdh aksjdh aksjd akjshd kajshd kjakajksjk akhsjdkjahsh sjhdjs jshdjsh",
    slides: [
      {
        title: 'Overview',
        text: 'I made this project for this reason... asdasdasd asd asd sdwqd qwd qwd qwdqw dqwdqwd qdwd qwd qwd qwdasd asd asd asd asd  asd asd ads asd asd asd ;askldkas;lkfw peokfpw oek opwekf powekf powekfopwke fpokwepofkw poekfpow kefpowkefp owkefpo kwepfok wepofkpwoekfopwek f 1231 23 asd asd qwd qer dqsd qsdqw eq edd qwd qwe qwe qwewewe wq we',
        image: testPic,
      },
      {
        title: 'Core Functionality',
        text: 'This is some of the logic I programmed and how the app works',
        image: testPicTwo,
      },
      {
        title: 'Spotlight',
        text: 'This is the feature I am most proud of... This is the biggest challenge I overcame',
        image: testPicThree,
      },
    ],
  },
  {
    path: '/projects/duffy-web-brain-two',
    title: 'Duffy Web Brain 2',
    subtitle: 'Personal notes app',
    stack: ['React', 'Gatsbyjs', 'PrismJs', 'Tester', 'Long Stack Item', 'Another long Stack Item'],
    description:
      "Throughout most of my self education I had not been utilizing any solid not taking methodology. Learning in the IDE wasn't cutting it, so I made my own solution!",
    slides: [
      {
        title: 'Overview',
        text: 'I made this project for this reason...',
        image: testPic,
      },
      {
        title: 'Core Functionality',
        text: 'This is some of the logic I programmed and how the app works',
        image: testPicTwo,
      },
      {
        title: 'Spotlight',
        text: 'This is the feature I am most proud of... This is the biggest challenge I overcame',
        image: testPicThree,
      },
    ],
  },
  {
    path: '/projects/duffy-web-brain-three',
    title: 'Duffy Web Brain 3',
    subtitle: 'Personal notes app',
    stack: ['React', 'Gatsbyjs', 'PrismJs'],
    description:
      "Throughout most of my self education I had not been utilizing any solid not taking methodology. Learning in the IDE wasn't cutting it, so I made my own solution!",
    slides: [
      {
        title: 'Overview',
        text: 'I made this project for this reason...',
        image: testPic,
      },
      {
        title: 'Core Functionality',
        text: 'This is some of the logic I programmed and how the app works',
        image: testPicTwo,
      },
      {
        title: 'Spotlight',
        text: 'This is the feature I am most proud of... This is the biggest challenge I overcame',
        image: testPicThree,
      },
    ],
  },
  {
    path: '/projects/duffy-web-brain-three',
    title: 'Duffy Web Brain 3',
    subtitle: 'Personal notes app',
    stack: ['React', 'Gatsbyjs', 'PrismJs'],
    description:
      "Throughout most of my self education I had not been utilizing any solid not taking methodology. Learning in the IDE wasn't cutting it, so I made my own solution!",
    slides: [
      {
        title: 'Overview',
        text: 'I made this project for this reason...',
        image: testPic,
      },
      {
        title: 'Core Functionality',
        text: 'This is some of the logic I programmed and how the app works',
        image: testPicTwo,
      },
      {
        title: 'Spotlight',
        text: 'This is the feature I am most proud of... This is the biggest challenge I overcame',
        image: testPicThree,
      },
    ],
  },
  {
    path: '/projects/duffy-web-brain-three',
    title: 'Duffy Web Brain 3',
    subtitle: 'Personal notes app',
    stack: ['React', 'Gatsbyjs', 'PrismJs'],
    description:
      "Throughout most of my self education I had not been utilizing any solid not taking methodology. Learning in the IDE wasn't cutting it, so I made my own solution!",
    slides: [
      {
        title: 'Overview',
        text: 'I made this project for this reason...',
        image: testPic,
      },
      {
        title: 'Core Functionality',
        text: 'This is some of the logic I programmed and how the app works',
        image: testPicTwo,
      },
      {
        title: 'Spotlight',
        text: 'This is the feature I am most proud of... This is the biggest challenge I overcame',
        image: testPicThree,
      },
    ],
  },
];

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
  desktopL: '2560px',
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
