import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0;
  :not(:last-child) {
    margin-bottom: 60px;
  }
`;
const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 20px;
`;
const Children = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Section = ({title, children}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Children>{children}</Children>
    </Container>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
