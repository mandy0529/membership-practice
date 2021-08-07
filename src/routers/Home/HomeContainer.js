import React from 'react';
import {moviesApi} from '../../api';
import HomePresenter from './HomePresenter';

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
    search: null,
  };
  async componentDidMount() {
    try {
      const {
        data: {results},
      } = await moviesApi.nowPlaying();
      console.log(results);
    } catch (error) {
      this.setState({error: "can't find anything"});
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const {nowPlaying, upcoming, popular, error, loading, search} = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
        search={search}
      />
    );
  }
}
export default HomeContainer;
