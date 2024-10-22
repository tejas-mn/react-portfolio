const edu = [
  {
    id: 1,
    title: "Dr. Ambedkar Institute Of Technology ",
    desc: "B.Tech CSE, CGPA: 8.83",
    timeline: "July 2019 – August 2023",
  },
  {
    id: 2,
    title: "St. Claret PU College   ",
    desc: "Class 12/PUC, Percentage: 92.67%",
    timeline: "June 2017 – March 2019",
  },
  {
    id: 3,
    title: "Vinodh English High School ",
    desc: "Class 10/SSLC, Percentage: 93.76%",
    timeline: "June 2016 – April 2017",
  },
];

const exp = [
  {
    id: 1,
    company: "CSG International",
    title: "Test Engineer Grad",
    timeline: "Sep 2023 – Present",
    desc: [
      "Writing component tests for APIs developed in the feature utilizing *C#* libraries like *Xunit*, *FluentAssertions* and mocking microservices through *WireMock* integrated into *Docker* & *Azure DevOps* pipeline.",
      "Writing *SQL* queries for querying and seeding data against database tables for component tests. Utilizing AWS services like *CloudWatch*, *S3* , *DynamoDB*, *SNS*, *SQS* for testing event driven scenarios.",
      "Performing API automation and scripting using *Postman*, Performance tests using *JMeter* with *Kibana* for visualizing and monitoring performance results and logs. Testing defects across development and production environments.",
      "Actively involved in *Agile methodologies* and Scrum ceremonies like Sprint Planning, Story Breakdown and Retro.",
    ],
  },
  {
    id: 2,
    company: "CSG International",
    title: "Test Intern",
    timeline: "March 2023 – Sep 2023",
    desc: [
      "Writing component tests for APIs developed in the feature utilizing C# libraries like Xunit, FluentAssertions and mocking microservices through WireMock integrated into Docker & Azure DevOps pipeline.",
      "Writing SQL queries for querying and seeding data against database tables for component tests. Utilizing AWS services like CloudWatch, S3 , DynamoDB, SNS, SQS for testing event driven scenarios.",
      "Performing API automation and scripting using Postman, Performance tests using JMeter with Kibana for visualizing and monitoring performance results and logs. Testing defects across development and production environments.",
      "Actively involved in Agile methodologies and Scrum ceremonies like Sprint Planning, Story Breakdown and Retro.",
    ],
  },
  {
    id: 3,
    company: "Softmantissa",
    title: "Web Developer Intern",
    timeline: "Oct 2021 – Jan 2022",
    desc: [
      "Developed responsive frontend components utilizing HTML, CSS, JavaScript and Bootstrap.",
      "Designed a website for local school involving CSS Media Queries and Bootstrap layouts.",
      "Developed Student Management Api’s using Python Flask.",
    ],
  },
];

const projects = [
  {
    id: 8,
    title: ".NET Web API",
    techStack: "C# .NET,OOPS,SQL",
    techStackList: [
      "C#", ".NET", "OOPS", "SQL"
    ],
    timeline: "Sep 2023",
    description:
      "A .NET Web API for managing e-commerce products and categories. Implmented Role based Authorization using *JWT* that prevents certain users from accessing API endpoints.",
    imageUrl:
      "https://1.bp.blogspot.com/-CQmn2fSiP_k/XzVC8Auzh3I/AAAAAAAAH8M/TnaeRorU2hgl8anoo_IkkzCz-zP_WKzSwCPcBGAYYCw/s1600/image003.gif",
    githubUrl:
      "https://github.com/tejas-mn/Sorto-Viz",
    liveUrl:
      "https://algo-viz-tej.netlify.app/"
  },
  {
    id: 3,
    title: "Leaf Disease Detection using CNN",
    techStack: "Flask,Tensorflow,OpenCv,Javascript,Bootstrap",
    techStackList: [
      "Flask", "TensorFlow", "Opencv", "Javascript", "Bootstrap"
    ],
    timeline: "May 2023",
    description:
      "A web app to detect potato leaf blight disease using CNN. Made using Flask, Tensorflow and OpenCV.",
    imageUrl:
      "https://github.com/tejas-mn/final-year-project/assets/68629215/9a8e5c08-a7a2-4338-83ca-ba3be4ba462d",
    githubUrl:
      "https://github.com/tejas-mn/final-year-project",
    liveUrl:
      "https://tejasmn.pythonanywhere.com/"
  },
  {
    id: 2,
    title: "Sorting Visualizer",
    techStack: "React,JavaScript",
    techStackList: [
      "React", "Javascript"
    ],
    timeline: "Aug 2022",
    description:
      "A sorting visualizer to visualise Bubble Sort, Selection Sort, Merge Sort and Quick Sort.",
    imageUrl:
      "https://github.com/tejas-mn/Sorto-Viz/assets/68629215/4c511869-ff49-4de6-bc1a-d751ddf814ff",
    githubUrl:
      "https://github.com/tejas-mn/Sorto-Viz",
    liveUrl:
      "https://algo-viz-tej.netlify.app/"
  },
  {
    id: 1,
    title: "Gym Management System",
    techStack: "Flask,Bootstrap,JavaScript,SQL",
    techStackList: [
      "Flask", "Bootstrap", "JavaScript", "SQL"
    ],
    timeline: "Jan 2022",
    description:
      "A Full Stack Gym Management application implementing *CRUD* operations, Pagination and Authentication for managing data of Gym Members, Trainers Equipments",
    imageUrl:
      "https://user-images.githubusercontent.com/68629215/181266083-3023a53b-2ece-4539-81ab-9b15f4969bd9.png",
    githubUrl:
      "https://github.com/tejas-mn/Gym-Management-System-Flask",
    liveUrl:
      "https://algo-viz-tej.netlify.app/"
  },
  {
    id: 5,
    title: "IR Remote Controller for PC",
    techStack: "Tkinter,Arduino,Pyautogui,Python",
    techStackList: ["Tkinter", "Arduino", "Pyautogui", "Python"],
    timeline: "Jul 2022",
    description:
      "A Tkinter application that allows a TV remote to control Personal Computer connected via *Arduino*. Can be used to control presentations, media etc.",
    imageUrl:
      "https://github.com/tejas-mn/mp-final/assets/68629215/af64bc19-a0eb-46bc-b9bd-0d1cb3d9c816",
    githubUrl:
      "https://github.com/tejas-mn/mp-final",
    liveUrl:
      "https://github.com/tejas-mn/mp-final"
  },
  {
    id: 4,
    title: "Todo App",
    techStack: "Flask,Html & CSS,JavaScript,jQuery",
    techStackList: ["Flask", "Html", "CSS", "JavaScript", "jQuery"],
    timeline: "Sep 2021",
    description:
      "A Todo app where users can sign up to maintain todos, update deadlines. Filter and Search capabilities through todos. Made using Flask.",
    imageUrl:
      "https://github.com/tejas-mn/Flask-App/assets/68629215/436e962b-747f-4872-a3aa-bcc94a2f8979",
    githubUrl:
      "https://github.com/tejas-mn/Flask-App/tree/master",
    liveUrl:
      "https://github.com/tejas-mn/Flask-App/tree/master"
  },

  {
    id: 6,
    title: "Web based remote command runner using CGI",
    techStack: "Python,Html,RHEL8,Docker,Flask",
    techStackList: ["Python", "Html", "RHEL8", "Docker", "Flask"],
    timeline: "Sep 2020",
    description:
      "A web app that can run terminal commands on a remote server using common gateway interface. Can also run docker commands through web page.",
    imageUrl:
      "https://github.com/tejas-mn/SSH-Remote-Access/assets/68629215/d7dd336a-3fce-4006-8fcf-04d54392c55b",
    githubUrl:
      "https://github.com/tejas-mn/SSH-Remote-Access",
    liveUrl:
      "https://www.youtube.com/playlist?list=PLGmZIPUNEgq-Mcfrd6fTkiifT_H6cM92B"
  },
  {
    id: 7,
    title: "Weather App",
    techStack: "Html,CSS,JavaScript",
    techStackList: ["Html", "CSS", "JavaScript"],
    timeline: "Oct 2022",
    description:
      "A simple weather app that displays weather information using OpenWeather API.",
    imageUrl:
      "https://github.com/tejas-mn/weather-app-gcloud-lab/assets/68629215/d87dd822-044d-47d2-8882-316229607c93",
    githubUrl:
      "https://github.com/tejas-mn/weather-app-gcloud-lab",
    liveUrl:
      "https://github.com/tejas-mn/weather-app-gcloud-lab"
  },
];

const skills = [
  { id: 1, name: 'DSA', level: 'Intermediate' },
  { id: 2, name: 'OOPS', level: 'Intermediate' },
  { id: 7, name: 'C++', level: 'Intermediate' },
  { id: 6, name: 'React', level: 'Intermediate' },
  { id: 3, name: 'Javascript', level: 'Intermediate' },
  { id: 4, name: 'C#', level: 'Beginner' },
  { id: 5, name: '.NET WEB API', level: 'Beginner' },
  { id: 8, name: 'Python', level: 'Intermediate' },
  { id: 9, name: 'Flask', level: 'Intermediate' },
  { id: 10, name: 'AWS', level: 'Beginner' }
]

const pics = [
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/334384092/original/56bd04ca9f50033757525fc41e9fbed0a08e460e/design-a-custom-logo.png",
  "https://i.pinimg.com/736x/a3/96/63/a3966351deb43da383db28f854e2f6b3.jpg",
];

const banners = [
  "https://www.otakukulture.in/wp-content/uploads/2023/09/Op.png",
  "https://i.pinimg.com/550x/d9/11/96/d91196b3dc2628506dfca2e92ccbf22e.jpg",
  "https://i.pinimg.com/736x/99/9c/95/999c95488c111f78e8de0298e2510e7f.jpg",
  "https://i.pinimg.com/736x/12/cd/97/12cd9772e6dad8b7af73c2b0880ddba5.jpg",
  "https://gifdb.com/images/high/aesthetic-anime-pixelated-background-bnuuk8wf00lrrcvf.gif",
  "https://i.pinimg.com/originals/cc/6a/fc/cc6afc451a6d3857d556331e16e10bf7.gif",
  "https://chosenoneappearal.com/cdn/shop/files/ezgif.com-gif-maker_-_2023-09-18T121549.841_1000x.gif?v=1695053769"
];

const userInfo = {
  name: "Tejas M N",
  email: "tejasmn2020@gmail.com",
  location: "Bangalore, India",
  profession: "SDET @ CSGI | Ex-Intern @ Softmantissa ",
  headline: "Aspiring SDET looking for transitioning into SDE Role",
  links: {
    resume: "https://drive.google.com/file/d/1vZlM2naXPM-dFPVBR1X4JRvv49TKBsKo/view?usp=sharing",
    leetcode: "https://www.leetcode.com/tejasmn",
    github: "https://www.github.com/tejas-mn",
    linkedin: "https://www.linkedin.com/in/tejasmn/",
  },
  bannerImages: banners,
  profilePic: pics[1],
  aboutInfo:
    "Aspiring Software Engineer from computer science background, graduated in 2023 currently working as SDET in US based product company. Proficient in web development and backend programming with expertise in HTML, CSS, JavaScript, SQL, C#, and React. Eager to leverage experience in development to contribute effectively to development teams in a challenging environment. Strong problem-solving skills combined with a passion for learning and adapting to new technologies.",
  experienceInfo:
    "Aspiring Software Engineer from computer science background, graduated in 2023 currently working as SDET in US based product company. Proficient in web development and backend programming with expertise in HTML, CSS, JavaScript, SQL, C#, and React. Eager to leverage experience in development to contribute effectively to development teams in a challenging environment. Strong problem-solving skills combined with a passion for learning and adapting to new technologies.",
};

export { edu, exp, projects, skills, userInfo };
