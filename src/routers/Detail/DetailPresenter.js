import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../components/Loader';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.4;
  z-index: 0;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  display: flex;
`;

const Cover = styled.div`
  margin: 30px;
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.posterImage});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
`;
const DetailPresenter = ({detail, error, loading}) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
      ></Backdrop>
      <Content>
        <Cover
          posterImage={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
        ></Cover>
      </Content>
    </Container>
  );
};
DetailPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
