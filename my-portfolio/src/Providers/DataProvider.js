const edu = [
    {id:1, title: 'Dr. Ambedkar Institute Of Technology ', desc: 'B.Tech CSE, CGPA: 8.83', timeline: 'July 2019 – August 2023'},
    {id:2, title: 'St. Claret PU College   ', desc: 'Class 12/PUC, Percentage: 92.67%', timeline: 'June 2017 – March 2019'},
    {id:3, title: 'Vinodh English High School ', desc: 'Class 10/SSLC, Percentage: 93.76%', timeline: 'June 2016 – April 2017'}
]

const exp = [
    { 
      id:1, company:'CSG International', title:'Test Engineer Grad', timeline:'Sep 2023 – Present',
      desc: [
        "Writing component tests for APIs developed in the feature utilizing C# libraries like Xunit, FluentAssertions and mocking microservices through WireMock integrated into Docker & Azure DevOps pipeline.",
        "Writing SQL queries for querying and seeding data against database tables for component tests. Utilizing AWS services like CloudWatch, S3 , DynamoDB, SNS, SQS for testing event driven scenarios.",
        "Performing API automation and scripting using Postman, Performance tests using JMeter with Kibana for visualizing and monitoring performance results and logs. Testing defects across development and production environments.",
        "Actively involved in Agile methodologies and Scrum ceremonies like Sprint Planning, Story Breakdown and Retro."
      ]
    },
    { 
      id:2, company:'CSG International', title:'Test Intern', timeline:'March 2023 – Sep 2023',
      desc: [
        "Writing component tests for APIs developed in the feature utilizing C# libraries like Xunit, FluentAssertions and mocking microservices through WireMock integrated into Docker & Azure DevOps pipeline.",
        "Writing SQL queries for querying and seeding data against database tables for component tests. Utilizing AWS services like CloudWatch, S3 , DynamoDB, SNS, SQS for testing event driven scenarios.",
        "Performing API automation and scripting using Postman, Performance tests using JMeter with Kibana for visualizing and monitoring performance results and logs. Testing defects across development and production environments.",
        "Actively involved in Agile methodologies and Scrum ceremonies like Sprint Planning, Story Breakdown and Retro."
      ]
    },
    { 
      id:3, company:'Softmantissa', title:'Web Developer Intern', timeline:'Oct 2021 – Jan 2022',
      desc: [
        "Developed responsive frontend components utilizing HTML, CSS, JavaScript and Bootstrap.",
        "Designed a website for local school involving CSS Media Queries and Bootstrap layouts.",
        "Developed Student Management Api’s using Python Flask."   
      ]
    }
]

const projects = [
    { id: 7, title: '.NET Web API', description: 'A .NET Web API for managing e-commerce products and categories. Implmented Role based Authorization using JWT that prevents certain users from accessing API endpoints.', imageUrl: 'https://private-user-images.githubusercontent.com/68629215/302111269-8cf19c2e-a5e4-46a1-8a7d-3ee12f910f3f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwNTg1MDgsIm5iZiI6MTcwNzA1ODIwOCwicGF0aCI6Ii82ODYyOTIxNS8zMDIxMTEyNjktOGNmMTljMmUtYTVlNC00NmExLThhN2QtM2VlMTJmOTEwZjNmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDE0NTAwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk2MGExNGJjODEwNDcxNGJhYzMwYjY5YzA1YmI3OGMzZTQ1OTJmYmVhOTIzMTFhNThlYTA4ZDk5MDljZDA1MzQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.z3uOemKtxzjYeG3r5bIEh1FFOTkWFNbILQQRCQQ4eNw' },
    { id: 1, title: 'Gym Management System', description: 'A Full Stack Gym Management application implementing CRUD operations, Pagination and Authentication for managing data of Gym Members, Trainers Equipments', imageUrl: 'https://user-images.githubusercontent.com/68629215/181266083-3023a53b-2ece-4539-81ab-9b15f4969bd9.png' },
    { id: 2, title: 'Sorting Visualizer', description: 'A sorting visualizer to visualise Bubble Sort, Selection Sort, Merge Sort and Quick Sort.', imageUrl: 'https://private-user-images.githubusercontent.com/68629215/302108099-a2e4980f-f704-4a40-9d43-ef3d8786836b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwNTU1NTMsIm5iZiI6MTcwNzA1NTI1MywicGF0aCI6Ii82ODYyOTIxNS8zMDIxMDgwOTktYTJlNDk4MGYtZjcwNC00YTQwLTlkNDMtZWYzZDg3ODY4MzZiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDE0MDA1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM4NTZiYjM2MGI0YThjNmVjNWI2YzgwZjk1NzI3MjkyNWNkZWY3MGMzMmI1ZWMxMTY2NjIzYTk0ODhkOGRkNzcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.a7WGXffRJvcv6kNn6sbF8WM4J3ChAuyQwuCYemGqAh0'},
    { id: 3, title: 'Leaf Disease Detection using CNN', description: 'A web app to detect potato laef blight disease using CNN. Made using Flask, Tensorflow and OpenCV.', imageUrl: 'https://private-user-images.githubusercontent.com/68629215/302108418-deb842dc-7a58-4d4c-b7c0-5472dbb37e45.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwNTU4MzQsIm5iZiI6MTcwNzA1NTUzNCwicGF0aCI6Ii82ODYyOTIxNS8zMDIxMDg0MTgtZGViODQyZGMtN2E1OC00ZDRjLWI3YzAtNTQ3MmRiYjM3ZTQ1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDE0MDUzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ5YzE3YTI4NTI3ZWI4NDAyMjc0Nzk1MjQwYWM3YTM4ODc0OTU2MWM5MmI3OTgwZDQ0NjE3ZjVlZmEyZDYxYjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.LTEBONhan2jg-70tvluNC9LAYXgvMVdlnGKyLHD9fXc' },
    { id: 4, title: 'Todo App', description: 'A Todo app where users can sign up to maintain todos, update deadlines. Filter and Search capabilities through todos. Made using Flask.', imageUrl: 'https://private-user-images.githubusercontent.com/68629215/302109493-436e962b-747f-4872-a3aa-bcc94a2f8979.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwNTY3MjIsIm5iZiI6MTcwNzA1NjQyMiwicGF0aCI6Ii82ODYyOTIxNS8zMDIxMDk0OTMtNDM2ZTk2MmItNzQ3Zi00ODcyLWEzYWEtYmNjOTRhMmY4OTc5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDE0MjAyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFlZjJhOTUzNTExZDNkYjJkODJkODUzZDQ1NDQzOGFkOTBjYTM4OTE3NDI4MzQ2MzlkZjVlNjk1NmJmY2M5NTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.U1bBvlvq2GuaC-8fty3zbAjSfyGyKqgvTO-s_1fXzH4' },
    { id: 6, title: 'Web based remote command runner using CGI', description: 'A web app that can run terminal commands on a remote server using common gateway interface. Can also run docker commands through web page.', imageUrl: 'https://private-user-images.githubusercontent.com/68629215/302110796-2913bea4-4610-4a91-be5a-282f5f142786.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwNTc5OTIsIm5iZiI6MTcwNzA1NzY5MiwicGF0aCI6Ii82ODYyOTIxNS8zMDIxMTA3OTYtMjkxM2JlYTQtNDYxMC00YTkxLWJlNWEtMjgyZjVmMTQyNzg2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDE0NDEzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIyY2VlNzgwOThkZDhjYzIwYjVkNjdiODhjYTVhNmIxOGVjZjIwNzgxMGRjNTc0NDg2NDA0ZGQ1OTFiNDBlMjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.wgowQXx-IxXANCWW_BtDoLo_NnkH7UZV9oWJu5mecsc' },
    { id: 5, title: 'IR Remote Controller for PC', description: 'A Tkinter application that allows a TV remote to control Personal Computer connected via Arduino. Can be used to control presentations, media etc.', imageUrl: 'https://private-user-images.githubusercontent.com/68629215/302109933-f1564105-db6e-48c5-990a-638442314831.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwNTcxOTEsIm5iZiI6MTcwNzA1Njg5MSwicGF0aCI6Ii82ODYyOTIxNS8zMDIxMDk5MzMtZjE1NjQxMDUtZGI2ZS00OGM1LTk5MGEtNjM4NDQyMzE0ODMxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDE0MjgxMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRmNTEyODgxNGYzZWEzOGRjY2U5N2EzNDgxNjRlOTQ2MTEyZjcxMjQ2ZjAwM2MxYzYyY2Q3ZDE3M2RjYmNlZGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.-cBb4lqhS6s09ID_ribtRZRhtF4hZfewgoPp-DfrU3w' },
    { id: 6, title: 'Weather App', description: 'A simple weather app that displays weather information using OpenWeather API.', imageUrl: 'https://private-user-images.githubusercontent.com/68629215/302113230-d87dd822-044d-47d2-8882-316229607c93.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwNjA1MDEsIm5iZiI6MTcwNzA2MDIwMSwicGF0aCI6Ii82ODYyOTIxNS8zMDIxMTMyMzAtZDg3ZGQ4MjItMDQ0ZC00N2QyLTg4ODItMzE2MjI5NjA3YzkzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDE1MjMyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE2NDNhNTA2YzE3N2FhMWZkNTNjYTcyYzZhYjZmYWJhMmI5YTI5MmMwMTY3ZGE2MjcxZThjYTRkZjc1ZjBiMWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._msVQlUmCZ-R700hSCh6JGySu-MMHU5hkM4iDW2zPuA' },
]

let skills = ['DSA', 'OOPS', 'Javascript', 'C#', '.NET WEB API', 'React', 'C++', 'Python', 'Flask', 'AWS' ]

const pics = [
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/334384092/original/56bd04ca9f50033757525fc41e9fbed0a08e460e/design-a-custom-logo.png",
  "https://i.pinimg.com/736x/a3/96/63/a3966351deb43da383db28f854e2f6b3.jpg",
]

const userInfo = {
  name : 'Tejas M N',
  email : 'tejasmn2020@gmail.com',
  location : 'Bangalore, India',
  profession : 'SDET | CSGI',
  headline : 'Aspiring SDET looking for transitioning into SDE Role',
  links : {
    resume : 'https://drive.google.com/file/d/1vZlM2naXPM-dFPVBR1X4JRvv49TKBsKo/view?usp=sharing',
    leetcode : 'https://www.leetcode.com/tejasmn',
    github : 'https://www.github.com/tejas-mn',
    linkedin : 'https://www.linkedin.com/in/tejasmn/'
  } ,
  profilePic : pics[1],
  aboutInfo: "Aspiring Software Engineer from computer science background, graduated in 2023 currently working as SDET in US based product company. Proficient in web development and backend programming with expertise in HTML, CSS, JavaScript, Python (Flask), SQL, C#, and React. Skilled in building robust and scalable applications, with a demonstrated ability to develop and deploy projects independently. Eager to leverage experience in development to contribute effectively to development teams in a challenging environment. Strong problem-solving skills combined with a passion for learning and adapting to new technologies.",
  experienceInfo : "Aspiring Software Engineer from computer science background, graduated in 2023 currently working as SDET in US based product company. Proficient in web development and backend programming with expertise in HTML, CSS, JavaScript, Python (Flask), SQL, C#, and React. Skilled in building robust and scalable applications, with a demonstrated ability to develop and deploy projects independently. Eager to leverage experience in development to contribute effectively to development teams in a challenging environment. Strong problem-solving skills combined with a passion for learning and adapting to new technologies."
}

export {edu, exp, projects, skills, userInfo}