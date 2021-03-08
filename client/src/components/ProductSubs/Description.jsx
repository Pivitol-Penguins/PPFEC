import React from 'react';
import styled from 'styled-components';

const DescWrapper = styled.div`
  border-right: 3px solid #aeaeae;
  flex-basis: 67%;
  padding: 0 1.5vw;
`;

const Slogan = styled.h1`
  color: #424242;
  font-weight: 700;
  font-size: 20px;
`;

const Body = styled.p`
  color: #424242;
  font-weight: 300;
`;

const Description = ({ info }) => (
  <DescWrapper>
    <Slogan>{info.slogan}</Slogan>
    <Body>{info.description}</Body>
  </DescWrapper>
);

export default Description;
