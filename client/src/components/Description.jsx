import React from 'react';
import styled from 'styled-components';

const DescWrapper = styled.div`
  border-right: 3px solid #aeaeae;
  flex-basis: 60%
`

const Slogan = styled.h1`
  color: #424242;
  font-weight: bold;
  font-size: 20px;
`

const Body = styled.p`
  color: #424242;
  font-weight: thin;
`

const Description = ({info}) => {
  return (
    <DescWrapper>
      <Slogan>{info.slogan}</Slogan>
      <Body>{info.description}</Body>
    </DescWrapper>
  )
}

export default Description;