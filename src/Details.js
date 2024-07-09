// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.svg";

// Profile Image
import profile from "./assets/profile.png";

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import postman from "./assets/techstack/postman.png";
import mongodb from "./assets/techstack/mongodb.png";
import nodejs from "./assets/techstack/nodejs.png";


// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Sabarinathan E",
  tagline: "I build things for web...",
  img: profile,
  about: `A skilled React developer with a strong portfolio, passionate about staying updated on frontend tech. Collaborative and committed to quality, you thrive in dynamic teams. Eager to contribute creativity and bring innovative ideas to life.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/sabari-sam-1747751a6/",
  github: "https://github.com/SabarinathanE",
};

// Enter your Work Experience here
export const workDetails = [

  {
    Position: "Internship",
    Company: `BaeHAL Software Limited`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Mar 2022 - Oct 2022",
  },
  {
    Position: "Design Engineer",
    Company: `BaeHAL Software Limited`,
    Location: "Bengaluru",
    Type: "Employee",
    Duration: "Oct 2022 - Aug 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Guvi",
    Location: "Online",
    Type: "Student",
    Duration: "Dec 2023 - Present"
  },
  {
    Position: "Bachelor in Aeronautical Engineering",
    Company: `Jeppiaar Engineering College`,
    Location: "Chennai",
    Type: "Student",
    Duration: "2016 - 2020",
  },
  {
    Position: "Higher Secondary",
    Company: `S.R.V Matric Hr.Sec School`,
    Location: "Trichy",
    Type: "Student",
    Duration: "2014 - 2016",
  },
  {
    Position: "SSLC",
    Company: `Neelan Matric Hr.Sec School`,
    Location: "Needamangalam",
    Type: "Student",
    Duration: "2014",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  git: git,
  github: github,
  mongodb: mongodb,
  nodejs: nodejs,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Task Management Application",
    image: projectImage1,
    description: `Developed a CRUD-operational website using MERN stack and Managed front-end state with Redux, implemented RESTful APIs, and deployed on with Git/GitHub for version control.`,
    techstack: "HTML/CSS, JavaScript, MERN",
    previewLink: "https://capstone-project-task.netlify.app",
    githubLink: "https://github.com/SabarinathanE/Capstone-project-Fe",
  },
  {
    title: "Calculator App",
    image: projectImage2,
    description: `Developed a fully functional calculator application. Implemented basic arithmetic operations and ensured a responsive UI for seamless user interaction.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://realtimecalculator.netlify.app",
    githubLink: "https://github.com/SabarinathanE/Day-15-Task",
  },
  {
    title: "URL Shortener Website",
    image: projectImage3,
    description: `Designed and developed a URL shortener web application using MERN stack. Implemented features for shortening URLs, managing user accounts, and tracking click analytics.`,
    techstack: "HTML/CSS, JavaScript, MERN",
    previewLink: "https://jocular-travesseiro-99f8a3.netlify.app",
    githubLink: "https://github.com/SabarinathanE/urlshortener-frontend",
  }
];
