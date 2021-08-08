import React from 'react';
import {moviesApi, showApi} from '../../api';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: {pathname},
    } = props;
    this.state = {
      detail: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
    };
  }
  async componentDidMount() {
    const {
      match: {
        params: {id},
      },
      history: {push},
    } = this.props;
    const {isMovie} = this.state;
    const numberId = Number(id);
    if (isNaN(numberId)) {
      return push('/');
    }
    let detail = null;
    try {
      if (isMovie) {
        ({data: detail} = await moviesApi.movieDetail(numberId));
      } else {
        ({data: detail} = await showApi.showDetail(numberId));
      }
      console.log(detail);
    } catch (error) {
      this.setState({error: "can't find any detail"});
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const {detail, error, loading} = this.state;
    return <DetailPresenter detail={detail} error={error} loading={loading} />;
  }
}
export default DetailContainer;
