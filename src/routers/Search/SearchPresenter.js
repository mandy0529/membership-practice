import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../components/Loader';
import Section from '../../components/Section';
import Msg from '../../components/Msg';
import Poster from '../../components/Poster';

const Container = styled.div`
  padding: 20px 30px;
`;
const Form = styled.form`
  margin-bottom: 50px;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 30px;
  font-size: 28px;
`;

const SearchPresenter = ({
  movieDetail,
  showDetail,
  searchWord,
  error,
  loading,
  handleSubmit,
  updateSubmit,
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="search of tv shows or movies..."
          value={searchWord}
          onChange={updateSubmit}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {movieDetail && movieDetail.length > 0 && (
            <Section title={'movie results'}>
              {movieDetail.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  year={movie.release_date && movie.release_date.substr(0, 4)}
                  rating={movie.vote_average}
                  imgUrl={movie.poster_path}
                  isMovie={true}
                  title={movie.original_title}
                />
              ))}
            </Section>
          )}
        </div>
      )}
      {loading ? (
        <Loader />
      ) : (
        <div>
          {showDetail && showDetail.length > 0 && (
            <Section title={'show results'}>
              {showDetail.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  year={show.first_air_date && show.first_air_date.substr(0, 4)}
                  rating={show.vote_average}
                  imgUrl={show.poster_path}
                  isMovie={false}
                  title={show.original_name}
                />
              ))}
            </Section>
          )}
        </div>
      )}
      {error && <Msg color="gray" text={error} />}
      {movieDetail &&
        showDetail &&
        movieDetail.length === 0 &&
        showDetail.length === 0 && (
          <Msg color="gray" text={`nothing found "${searchWord}"`} />
        )}
    </Container>
  );
};
SearchPresenter.propTypes = {
  movieDetail: PropTypes.array,
  tvDetail: PropTypes.array,
  searchWord: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
