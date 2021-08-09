import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Msg from '../../components/Msg';
import Poster from '../../components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div``;

const ShowPresenter = ({topRated, airingToday, popular, error, loading}) => {
  return (
    <div>
      <Helmet>
        <title>show | minjiflex</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated && topRated.length > 0 && (
            <Section title="top Rated shows">
              {topRated.map((show) => (
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
          {airingToday && topRated.length > 0 && (
            <Section title="airing Today shows">
              {airingToday.map((show) => (
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
          {popular && popular.length > 0 && (
            <Section title="popular shows">
              {popular.map((show) => (
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
          {error && <Msg color="gray" text={error} />}
        </Container>
      )}
    </div>
  );
};
ShowPresenter.propTypes = {
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default ShowPresenter;
