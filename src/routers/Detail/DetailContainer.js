import React from 'react';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
  state = {
    detail: null,
    error: null,
    loading: true,
  };

  render() {
    const {detail, error, loading} = this.state;
    return <DetailPresenter detail={detail} error={error} loading={loading} />;
  }
}
export default DetailContainer;
