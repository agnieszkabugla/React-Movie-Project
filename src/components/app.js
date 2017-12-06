import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { fetchMovies } from '../actions/index'; 
import { getInitialState } from '../actions/index'; 
import { getMovieDetails } from '../actions/index';


import SearchBar from '../containers/search_bar';
import MovieList from '../containers/movie_list'; 
import MovieListItem from '../containers/movie_list_item';
import MovieDetail from '../containers/movie_detail'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovie: ''
    }

    this.onInputChange = this.onInputChange.bind(this); 
    this.onSubmitSearch = this.onSubmitSearch.bind(this); 
  };

  onInputChange(event) {
    this.setState({searchMovie: event.target.value}); 
  };

  onSubmitSearch(event) {
    if (event.which === 13 || event.key === 13) {
      this.props.fetchMovies(this.state.searchMovie);
    }
  };

  render() {
    return (
      <div>
        <div className="transbox"/>
        <SearchBar 
          value={this.state.searchMovie} 
          onInputChange={this.onInputChange}
          onSubmitSearch={this.onSubmitSearch} />
          <br />
          <div className="container">
            <div className="row">
              <MovieDetail />
              <MovieList />
            </div>
          </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies, getInitialState, getMovieDetails }, dispatch);
};

export default connect (null, mapDispatchToProps) (App);   
