import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Rating = styled.div`
  position: absolute;
  margin-top: -20px;
  margin-left: 5px;
  opacity: 0;
  transition: all 300ms linear;
`;
const Container = styled.div`
  font-size: 12px;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.2);
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 5px;
  background-position: center;
`;
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;
const Year = styled.span`
  opacity: 0.5;
`;
const Title = styled.span`
  display: block;
  font-weight: bold;
  margin: 3px;
`;
const Span = styled.span`
  padding-right: 4px;
`;
const Poster = ({id, title, year, rating, imgUrl, isMovie = false}) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgUrl={
              imgUrl
                ? `https://image.tmdb.org/t/p/w500/${imgUrl}`
                : 'noImage.jpeg'
            }
          />
          <Rating>
            <Span role="img" aria-label="rating">
              ⭐️
            </Span>
            {rating} / 10
          </Rating>
        </ImageContainer>
        <Title>
          {title.length > 18 ? `${title.substring(0, 18)}...` : title}
        </Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
};

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  rating: PropTypes.number,
  imgUrl: PropTypes.string,
  id: PropTypes.number.isRequired,
  isMovie: PropTypes.bool,
};
export default Poster;
