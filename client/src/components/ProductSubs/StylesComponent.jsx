import React from 'react';
import styled from 'styled-components';

import StyleThumbnails from './StyleThumbnails.jsx';

const StyleWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Styles = ({ styles }) => (
  <StyleWrapper>
    <div>STYLE</div>
    <div>SELECTED STYLE</div>
    <StyleThumbnails images={styles.results} />
  </StyleWrapper>
);

export default Styles;
