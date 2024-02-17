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
    techStack: "C# .NET, OOPS, SQL",
    timeline: "Sep 2023 – Present",
    description:
      "A .NET Web API for managing e-commerce products and categories. Implmented Role based Authorization using *JWT* that prevents certain users from accessing API endpoints.",
    imageUrl:
      "https://user-images.githubusercontent.com/68629215/181266083-3023a53b-2ece-4539-81ab-9b15f4969bd9.png",
  },
  {
    id: 1,
    title: "Gym Management System",
    techStack: "Flask, Bootstrap, JavaScript, SQL",
    timeline: "Sep 2023 – Present",
    description:
      "A Full Stack Gym Management application implementing *CRUD* operations, Pagination and Authentication for managing data of Gym Members, Trainers Equipments",
    imageUrl:
      "https://user-images.githubusercontent.com/68629215/181266083-3023a53b-2ece-4539-81ab-9b15f4969bd9.png",
  },
  {
    id: 2,
    title: "Sorting Visualizer",
    techStack: "React, JavaScript ",
    timeline: "Sep 2023 – Present",
    description:
      "A sorting visualizer to visualise Bubble Sort, Selection Sort, Merge Sort and Quick Sort.",
    imageUrl:
      "https://user-images.githubusercontent.com/68629215/181266083-3023a53b-2ece-4539-81ab-9b15f4969bd9.png",
  },
  {
    id: 3,
    title: "Leaf Disease Detection using CNN",
    techStack: "Flask, Tensorflow, OpenCv, Javascript, Bootstrap",
    timeline: "Sep 2023 – Present",
    description:
      "A web app to detect potato laef blight disease using CNN. Made using Flask, Tensorflow and OpenCV.",
    imageUrl:
      "https://user-images.githubusercontent.com/68629215/181266083-3023a53b-2ece-4539-81ab-9b15f4969bd9.png",
  },
  {
    id: 4,
    title: "Todo App",
    techStack: "Flask, Html & CSS, JavaScript, jQuery",
    timeline: "Sep 2023 – Present",
    description:
      "A Todo app where users can sign up to maintain todos, update deadlines. Filter and Search capabilities through todos. Made using Flask.",
    imageUrl:
      "https://user-images.githubusercontent.com/68629215/181266083-3023a53b-2ece-4539-81ab-9b15f4969bd9.png",
  },
  {
    id: 6,
    title: "Web based remote command runner using CGI",
    techStack: "Python, Html, RHEL8, Docker, Flask",
    timeline: "Sep 2023 – Present",
    description:
      "A web app that can run terminal commands on a remote server using common gateway interface. Can also run docker commands through web page.",
    imageUrl:
      "https://user-images.githubusercontent.com/68629215/181266083-3023a53b-2ece-4539-81ab-9b15f4969bd9.png",
  },
  {
    id: 5,
    title: "IR Remote Controller for PC",
    techStack: "Tkinter, Arduino, Pyautogui, Python",
    timeline: "Sep 2023 – Present",
    description:
      "A Tkinter application that allows a TV remote to control Personal Computer connected via *Arduino*. Can be used to control presentations, media etc.",
    imageUrl:
      "https://user-images.githubusercontent.com/68629215/181266083-3023a53b-2ece-4539-81ab-9b15f4969bd9.png",
  },
  {
    id: 7,
    title: "Weather App",
    techStack: "Html, CSS, JavaScript",
    timeline: "Sep 2023 – Present",
    description:
      "A simple weather app that displays weather information using OpenWeather API.",
    imageUrl:
      "https://user-images.githubusercontent.com/68629215/181266083-3023a53b-2ece-4539-81ab-9b15f4969bd9.png",
  },
];

let skills = [
  "DSA",
  "OOPS",
  "Javascript",
  "C#",
  ".NET WEB API",
  "React",
  "C++",
  "Python",
  "Flask",
  "AWS",
];

const pics = [
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/334384092/original/56bd04ca9f50033757525fc41e9fbed0a08e460e/design-a-custom-logo.png",
  "https://i.pinimg.com/736x/a3/96/63/a3966351deb43da383db28f854e2f6b3.jpg",
];

const userInfo = {
  name: "Tejas M N",
  email: "tejasmn2020@gmail.com",
  location: "Bangalore, India",
  profession: "SDET | CSGI",
  headline: "Aspiring SDET looking for transitioning into SDE Role",
  links: {
    resume:
      "https://drive.google.com/file/d/1vZlM2naXPM-dFPVBR1X4JRvv49TKBsKo/view?usp=sharing",
    leetcode: "https://www.leetcode.com/tejasmn",
    github: "https://www.github.com/tejas-mn",
    linkedin: "https://www.linkedin.com/in/tejasmn/",
  },
  profilePic: pics[1],
  aboutInfo:
    "Aspiring Software Engineer from computer science background, graduated in 2023 currently working as SDET in US based product company. Proficient in web development and backend programming with expertise in HTML, CSS, JavaScript, SQL, C#, and React. Eager to leverage experience in development to contribute effectively to development teams in a challenging environment. Strong problem-solving skills combined with a passion for learning and adapting to new technologies.",
  experienceInfo:
    "Aspiring Software Engineer from computer science background, graduated in 2023 currently working as SDET in US based product company. Proficient in web development and backend programming with expertise in HTML, CSS, JavaScript, SQL, C#, and React. Eager to leverage experience in development to contribute effectively to development teams in a challenging environment. Strong problem-solving skills combined with a passion for learning and adapting to new technologies.",
};

export { edu, exp, projects, skills, userInfo };
