import React from 'react';
import styled from 'styled-components';
import Feature from './Feature.jsx';

const List = styled.ul`
  list-style: none;
  flex-basis: 33%;
  padding-left: 1.5vw;
`;

const FeaturesList = ({ id, features }) => (
  <List>
    {features.map((feature) => <Feature key={`${id} + ${feature.feature}`} feature={feature} />)}
  </List>
);

export default FeaturesList;
