import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  &:before { content: '✓';
    color: #80ccc4;
    padding-right: .5rem; };
  color: #424242;
`;

const Feature = ({ feature }) => {
  if (feature.value) {
    return (
      <ListItem>{`${feature.feature}: ${feature.value}`}</ListItem>
    );
  }
  return (
    <ListItem>{feature.feature}</ListItem>
  );
};

export default Feature;
