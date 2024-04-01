import styled from 'styled-components';

const  Progress  =  styled.div`
  position:  fixed;
  background:  linear-gradient(
    to right,
    #5c5c5c  ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  4px;
  z-index:  3;
  top:0;
  left:0;
`;

export  default  Progress;