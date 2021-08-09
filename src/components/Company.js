import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 12px;
  transition: all 300ms ease-in-out;
  display: flex;
  margin: 100px;
`;
const Image = styled.div`
  background-image: url(${(props) => props.logoUrl});
  background-size: cover;
  background-position: center center;
  width: 100px;
  height: 180px;
  background-size: cover;
  border-radius: 5px;
  background-position: center;
`;
const ImageContainer = styled.div`
  position: relative;
`;

const Name = styled.span`
  display: block;
  font-weight: bold;
  margin: 3px;
  font-size: 18px;
`;
const Country = styled.div`
  font-size: 12px;
`;
const Company = ({id, name, logoPath, country}) => {
  return (
    <div>
      <Container id={id}>
        <ImageContainer>
          <Image
            logoUrl={
              logoPath
                ? `https://image.tmdb.org/t/p/w300/${logoPath}`
                : 'noImage.jpeg'
            }
          />
          <Name>{name}</Name>
          <Country>{country}</Country>
        </ImageContainer>
      </Container>
    </div>
  );
};

Company.propTypes = {
  name: PropTypes.string,
  logoPath: PropTypes.string,
  id: PropTypes.number,
  country: PropTypes.string,
};
export default Company;
