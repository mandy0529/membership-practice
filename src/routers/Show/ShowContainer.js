import React from 'react';
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

  render() {
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
