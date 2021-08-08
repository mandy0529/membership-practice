import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 34px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Loader = () => {
  return (
    <Container>
      <span role="img" aria-label="loading">
        ⏱
      </span>
    </Container>
  );
};

export default Loader;
