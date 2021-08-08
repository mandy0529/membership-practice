import React from 'react';
import {moviesApi, showApi} from '../../api';
import SearchPresenter from './SearchPresenter';

class SearchContainer extends React.Component {
  state = {
    movieDetail: null,
    tvDetail: null,
    searchWord: '',
    error: null,
    loading: false,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const {searchWord} = this.state;
    if (searchWord !== '') {
      this.searchByWord(searchWord);
    }
  };
  updateSubmit = (event) => {
    const {
      target: {value},
    } = event;
    console.log(value);
    this.setState({searchWord: value});
  };
  async searchByWord(word) {
    this.setState({loading: true});
    try {
      const {
        data: {results: movieDetail},
      } = await moviesApi.search(word);
      const {
        data: {results: showDetail},
      } = await showApi.search(word);
      this.setState({movieDetail, showDetail});
    } catch (error) {
      this.setState({error: "can't find anything."});
    } finally {
      this.setState({loading: false});
    }
  }
  render() {
    const {searchWord, movieDetail, showDetail, error, loading} = this.state;
    return (
      <SearchPresenter
        searchWord={searchWord}
        movieDetail={movieDetail}
        showDetail={showDetail}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateSubmit={this.updateSubmit}
      />
    );
  }
}

export default SearchContainer;
