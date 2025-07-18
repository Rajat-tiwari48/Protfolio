/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rajat Tiwari",
  title: "Hi, I'm Rajat",
  subTitle: emoji(
    "Passionate about crafting cutting-edge web solutions to tackle real-world challenges with innovation and creativity. Committed to excellence, I transform ideas into impactful, user-centric designs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1o_OyRJtLDiet7thKJFCJ72JaD0dxhIQe/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rajat-tiwari48",
  linkedin: "https://www.linkedin.com/in/rajat-tiwari-3bb18622a/",
  gmail: "rajat6396344@gmail.com",
  leetcode : "https://leetcode.com/u/rajat_tiwari48/",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "My skills span both frontend and backend development, utilizing technologies like HTML5, CSS, Tailwind, Bootstrap, JavaScript, ReactJS, Redux, Node.js, Express.js, and Mongoose.js. I am also experienced with databases such as MongoDB and MySQL."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajkiya Engineering College Sonbhadra",
      logo: require("./assets/images/rec_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "November 2021 – June 2025",
      desc: "(7.44 CGPA)",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Divine Light Public Inter College , Etawah",
      logo: require("./assets/images/Divine_logo.png"),
      subHeader: "Intermediate",
      duration: "April 2019 – March 2020",
      desc: " CBSE (76.2%) ",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Delhi Public School , Etawah",
      logo: require("./assets/images/dps.png"),
      subHeader: "High School ",
      duration: "September 2013 - April 2017",
      desc: "CBSE (85.2%)",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "GolokaIT",
      link:"https://drive.google.com/file/d/1fGPNQGTzsk4qgllS-ZQgcYyM5K3XghJm/view?usp=sharing",
      date: "July 2024 – December 2024",
      desc: "Completed an internship by GoloksIT on a role of Frontend Developer.",
   
    },
    {
      role: "Web Development Workshop",
      company: "Microsoft Learn Student Ambassadors",
      link:"https://drive.google.com/file/d/1qqFnIQsYTPW-K2dc8I4XCSB1XQADIsMc/view?usp=sharing",
      date: "May 2024 – june 2024",
      desc: "Completed a Web Development workshop conducted by Microsoft Learn Student Ambassadors, gaining hands-on experience with modern web technologies."
    },


    {
      role: "Web Develoment",
      company: "Oasis Infobyte",
      link:"https://drive.google.com/file/d/1q3tIC-e1COuR3B8ek1K038cChm2FhUY6/view?usp=sharing",
      date: "June 2023 – July 2023",
      desc: "Completed a web development internship at Oasis Infobyte, building projects like a login page, to-do list, and calculator.",
   
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Full Stack MERN Projects",
  projects: [
    {
      image: require("./assets/images/black logo.png"),
      imageDark: require("./assets/images/squarelogo-removebg-preview.png"),
      projectName: "EasyMart",
      projectDesc: "Full Stack E-commerce website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://easy-mart-rajat.vercel.app/"
        },
        {
          name: "Github",
          url: "https://github.com/Rajat-tiwari48/EasyMart"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tomato-logos.png"),
      imageDark: require("./assets/images/tomato-logos.png"),
      projectName: "TOMATO Food App",
      projectDesc: "Food Ordering App",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tomato-sage-theta.vercel.app/"
        },  {
          name: "Github",
          url: "https://github.com/Rajat-tiwari48/Tomato"
        }
      ]
    },
    {
      image: "https://seekvectors.com/files/download/Black%20Color%20Netflix-01.png",
      imageDark:"https://seekvectors.com/files/download/Netflix-Logo-03.png",
      projectName: "NetflixGPT",
      projectDesc: "Watch Movies with AI",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netflix-five-pink-69.vercel.app/"
        },  {
          name: "Github",
          url: "https://github.com/Rajat-tiwari48/netflix"
        }
      ]
    },
    {
      image: require("./assets/images/todo-logo.png"),
      imageDark: require("./assets/images/todo-logo.png"),
      projectName: "TODO App",
      projectDesc: "TODO App with Authentication Using MERN Stack",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://todo-react-rajat-one.vercel.app/"
        },  {
          name: "Github",
          url: "https://github.com/Rajat-tiwari48/Todo-frontend"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Check my Github for Code",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
   
   
    {
      url: "https://currency-converter-ten-neon.vercel.app/",
      title: "Currency Converter",
      description:
        "https://currencyconvertersinc.com/wp-content/uploads/2016/05/GlobalCurrency_WebsiteHomepageDesign_Desktop_02.png"
    },
    {
      url: "https://github.com/Rajat-tiwari48/Protfolio",
      title: "Portfolio Assignement using JSON Server (Check More about it on my Github) ",
      description:
        "https://ezahn47ugtf.exactdn.com/wp-content/uploads/2022/05/portfolio-book-creation-scaled.jpg?strip=all&lossy=1&ssl=1"
    },
   
    {
      url: "https://tomato-sage-theta.vercel.app/",
      title: "Food Recipe App",
      description:
        "https://cdn.mos.cms.futurecdn.net/5rReTf4Cyr6CmhYLv2BWz4.jpg"
    },
    {
      url: "https://calculator-mu-steel-97.vercel.app/",
      title: "calculator",
      description:
        "https://static.vecteezy.com/system/resources/previews/026/183/272/original/creative-calculator-logo-icon-design-template-free-vector.jpg"
    },
    {
      url: "https://react-basic-projects-for-learning.vercel.app/",
      title: "Learning React",
      description:
        "https://media.licdn.com/dms/image/C511BAQF8F2Wry9GTXQ/company-background_10000/0/1584269093982/reactofficial_cover?e=2147483647&v=beta&t=TMIox6sTR3227DIw-2U1I_gk7cqj7xktbb2OkKNfvo4"
    },
    {
      url: "https://snake-game-sepia-psi.vercel.app/",
      title: "Snake Game",
      description:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-d1D3os2A_8b4UvQDEaM7N0JbkcYxYvM5A&s"
    },
    {
      url: "https://stope-watch-nine.vercel.app/",
      title: "StopeWatch",
      description:
        "https://i.ytimg.com/vi/cO-qjCC_UYQ/maxresdefault.jpg"
    },
    {
      url: "https://password-generator-lyart-gamma.vercel.app/",
      title: "Generate Pass",
      description:
        "https://www.codewithrandom.com/wp-content/uploads/2022/08/Password-Generator.png"
    },
    {
      url: "https://rock-paper-scissor-bice.vercel.app/",
      title: "Rock Paper Scissor Game",
      description:
        "https://i.ytimg.com/vi/qWPtKtYEsN4/maxresdefault.jpg"
    },
  
    {
      url: "https://theme-switcher-gamma-lilac.vercel.app/",
      title: "Theme Switcher",
      description:
        "https://p.kindpng.com/picc/s/574-5748054_switcher-studio-logo-hd-png-download.png"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 6396344911",
  email_address: "rajat6396344@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
