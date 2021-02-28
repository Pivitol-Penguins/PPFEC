import React from 'react';
import styled from 'styled-components';
import Feature from './Feature.jsx';

const List = styled.ul`
  list-style: none;
  flex-basis: 40%;
`;

const FeaturesList = ({ features }) => (
  <List>
    {features.map((feature, index) => <Feature key={index} feature={feature} />)}
  </List>
);

export default FeaturesList;
