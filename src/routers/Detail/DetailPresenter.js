import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../components/Loader';
import Helmet from 'react-helmet';

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
  margin-left: 100px;
`;

const Cover = styled.div`
  margin: 30px;
  width: 30%;
  height: 80%;
  background-image: url(${(props) => props.posterImage});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
`;

const Data = styled.div`
  width: 70%;
  padding-left: 20px;
  padding: 30px;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const DataContainer = styled.div``;
const Item = styled.span`
  font-size: 20px;
  width: 80%;
`;
const Divider = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 3px 5px;
`;
const Overview = styled.p`
  font-size: 16px;
  opacity: 0.7;
  line-height: 1.5;
  margin-top: 30px;
  width: 50%;
`;
const Homepage = styled.a`
  display: block;
  position: relative;
  margin: 50px;
  border: 4px solid white;
  width: 230px;
  height: 40px;
  font-size: 20px;
  color: white;
  text-align: center;
  border-radius: 10px;
  transition: all 300ms ease-in;
  padding-top: 5px;
  font-weight: bold;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const Br = styled.div`
  padding: 5px;
`;
const EachSeason = styled.div`
  opacity: 0;
`;
const Season = styled.button`
  cursor: pointer;
  transition: all 300ms ease-in;
  margin: 0 10px;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  border: 4px solid white;
  background-color: transparent;
  color: white;
  text-align: center;
  padding-top: 3px;
  font-size: 25px;
  font-weight: bold;
`;
const SSC = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    ${Season} {
      background-color: white;
      color: black;
    }
    ${EachSeason} {
      opacity: 1;
    }
  }
`;
const SeasonPoster = styled.div`
  display: flex;
  background-image: url(${(props) => props.posterImg});
  background-size: cover;
  background-position: center center;
`;

const DetailPresenter = ({detail, error, loading, path}) => {
  return (
    <div>
      {loading ? (
        <div>
          <Loader />
          <Helmet>
            <title>loading | minjiflex </title>
          </Helmet>
        </div>
      ) : (
        <Container>
          <Helmet>
            <title>
              {detail.original_name
                ? detail.original_name
                : detail.original_title}
            </title>
          </Helmet>
          <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
          ></Backdrop>
          <Content>
            <Cover
              posterImage={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
            ></Cover>
            <Data>
              <FirstContainer>
                <Title>
                  {detail.original_title
                    ? detail.original_title
                    : detail.original_name}
                </Title>
                <SSC>
                  <Season>season</Season>
                  <EachSeason>
                    {detail.seasons &&
                      detail.seasons.map((season, index) =>
                        index === detail.seasons.length - 1
                          ? season.name
                          : `${season.name} / `
                      )}
                  </EachSeason>
                  <SeasonPoster
                    posterImg={`https://image.tmdb.org/t/p/w300/${detail.seasons.poster_path}`}
                  >
                    {detail.seasons.map((season) => season.poster_path)}
                  </SeasonPoster>
                </SSC>
              </FirstContainer>
              <DataContainer>
                <Item>
                  {detail.release_date
                    ? detail.release_date.substring(0, 4)
                    : detail.first_air_date.substring(0, 4)}
                </Item>
                <Divider> · </Divider>
                <Item>
                  {detail.origin_country
                    ? detail.origin_country
                    : detail.production_countries &&
                      detail.production_countries.map(
                        (country) => country.name
                      )}
                </Item>
                <Divider> · </Divider>
                <Item>
                  {detail.runtime ? detail.runtime : detail.episode_run_time}{' '}
                  min
                </Item>
                <Br></Br>
                <Divider> · </Divider>
                <Item>
                  {detail.genres &&
                    detail.genres.map((genre, index) =>
                      index === detail.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
              </DataContainer>
              <Overview>{detail.overview}</Overview>
              <Homepage href={detail.homepage}>→ streaming link bio</Homepage>
            </Data>
          </Content>
        </Container>
      )}
      ;
    </div>
  );
};
DetailPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
