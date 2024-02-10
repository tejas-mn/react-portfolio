import React from 'react';
import { projects } from "../Providers/DataProvider";
import { Pagination } from './Pagination';
import { PaginationProvider, usePagination } from '../Providers/PaginationProvider';

const PaginatedItemList = () => {
  const paginatedItems = usePagination().getPaginatedItems();

  return (
    <>
        {paginatedItems.map(currentProject => (
          <p className='project-list'>
          <b>{currentProject.title}</b> <quote>| React, JavaScript, .NET</quote>  <i style={{float:'right'}}> (Sep 2023 – Present)</i>  <br/>
          <quote>Github | Live Link</quote>     
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
    </>
  );
};

export function ProjectsList(){

  return (
    <> 
      <PaginationProvider itemsPerPage={3} items={projects}>
        <PaginatedItemList/>
        <Pagination />
      </PaginationProvider>
    </>
 )
}