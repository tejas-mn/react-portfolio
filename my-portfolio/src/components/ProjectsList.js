import React, { useState } from 'react';
import { projects } from './DataProvider';

export function ProjectsList(){

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(projects.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'flex-end'}}>
        {pageNumbers.map((number) => (
          <li key={number} style={{ margin: '0 5px' }}>
            <button
              style={{
                backgroundColor: currentPage === number ? 'rgb(89 89 89)' : '#333',
                color: currentPage === number ? '#fff' : '#fff',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
 return (
    <> 
      {currentProjects.map(currentProject => (
                <p style={{ backgroundColor:'#242222' , borderRadius:'8px', padding:'10px'}}>
                <b>{currentProject.title}</b>  <i> (Sep 2023 – Present)</i>  <br/>
                <i>Test Engineer Grad</i>     
                <ul>
                  <li>Writing component tests for APIs developed in the feature utilizing C# libraries like Xunit, FluentAssertions and
                  mocking microservices through WireMock integrated into Docker & Azure DevOps pipeline.</li>
                  <li>Writing SQL queries for querying and seeding data against database tables for component tests. Utilizing AWS services
                  like CloudWatch, S3 , DynamoDB, SNS, SQS for testing event driven scenarios.</li>
                  <li>Performing API automation and scripting using Postman, Performance tests using JMeter with Kibana for visualizing
                  and monitoring performance results and logs. Testing defects across development and production environments.</li>
                  <li>Actively involved in Agile methodologies and Scrum ceremonies like Sprint Planning, Story Breakdown and Retro.</li>
                </ul>
              </p>
      ))}

      <div>
         {renderPagination()}
      </div>
    </>
 )
}