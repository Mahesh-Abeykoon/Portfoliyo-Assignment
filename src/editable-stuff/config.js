// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "MAHESH",
  middleName: "",
  lastName: "ABEYKOON",
  message: " Technology is best when it brings people together...  ",
  icons: [
     
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/Mahesh0Abeykoon/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/mahesh/",
    },
     
    {
      image: "fa-github",
      url: "https://github.com/Mah-eshh",
    },
    {
      image: "fa-google-plus",
      url: "https://maheshpabeykoon@gmail.com",
    },
  
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  
  show: true,
  heading: "About Me", 
  imageLink: require("../editable-stuff/profilepic.png"),
  imageSize: 350,
  message:
    "My name is Mahesh Abeykoon. I’m an undergraduate of University of Sri Jayawardenepura with a degree in ICT. Computers are fast; programmers keep it slow...  ",
  resume: "https://docs.google.com/document/d/1rZwBgj7M6qORm9-yn5pZqM34zwNzf2PuiQRqI_aWCS8/edit#heading=h.yzb2542r9hgf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]

const repos = {

  show: true,
  heading: "Github Projects",
  gitHubUsername: "Mah-eshh", //i.e."mahesh---"
  reposLength: 4,
  specificRepos: [
    
  ],
 
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message: 
    "Lorem ipsum dolor, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profilepic.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profilepic.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"300",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
   
    { name: "SQL", value: 60 },
    { name: "Java", value: 80 },
    { name: "HTML/CSS", value: 65 },
    { name: "React", value: 55 },
    { name: "JavaScript", value: 70 },
    { name: "Data Structures", value: 65 },
    
  ],
  softSkills: [
    { name: "Creativity", value: 85 },
    { name: "Goal-Oriented", value: 75 },
    { name: "Collaboration", value: 80 },
    { name: "Positivity", value: 70 },
    { name: "Empathy", value: 75 },
    { name: "Organization", value: 75 },
    
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for part time Software Engineering ! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "maheshpabeykoon@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    // {
    //   role: 'Software Engineer',// Here Add Company Name
    //   companylogo: require('../assets/img/dell.png'),
    //   date: 'June 2018 – Present',
    // },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'Dec 2020 – May 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
