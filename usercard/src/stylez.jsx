import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  width: 30%;
`;

const CardImg = styled.img`
  width: 50%;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export {
  CardDiv,
  CardImg,
  ContainerDiv
};