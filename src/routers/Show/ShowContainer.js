import React from 'react';
import {showApi} from '../../api';
import ShowPresenter from './ShowPresenter';

class ShowContainer extends React.Component {
  state = {
    topRated: null,
    airingToday: null,
    popular: null,
    error: null,
    loading: true,
    search: null,
  };
  async componentDidMount() {
    try {
      const {
        data: {results: topRated},
      } = await showApi.topRated();
      const {
        data: {results: popular},
      } = await showApi.popular();
      const {
        data: {results: airingToday},
      } = await showApi.airingToday();
      this.setState({topRated, popular, airingToday});
    } catch (error) {
      this.setState({error: "can't find any shows"});
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    console.log(this.state);
    const {topRated, airingToday, popular, error, loading, search} = this.state;
    return (
      <ShowPresenter
        topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}
        search={search}
      />
    );
  }
}
export default ShowContainer;
