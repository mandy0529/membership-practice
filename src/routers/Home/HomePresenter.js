import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Msg from '../../components/Msg';
import Poster from '../../components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div`
  margin: 20px;
`;

const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => {
  return (
    <div>
      <Helmet>
        <title>movie | minjiflex</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing">
              {nowPlaying.map((movie) => (
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
          {upcoming && upcoming.length > 0 && (
            <Section title="upcoming">
              {upcoming.map((movie) => (
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
          {popular && popular.length > 0 && (
            <Section title="popular movies">
              {popular.map((movie) => (
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
          {error && <Msg color="gray" text={error} />}
        </Container>
      )}
      ;
    </div>
  );
};
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
