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
      this.setState({searchMovie: ''}); 
    }
  };

  render() {
    return (
      <div id="background">
        <div className="container"/>
        <SearchBar 
          value={this.state.searchMovie} 
          onInputChange={this.onInputChange}
          onSubmitSearch={this.onSubmitSearch} />
          <br />
          <div className="quote">
            <div className="container">
              <div className="row ">
                <div className="col-3 align-self-start">
                  <a target="_blank" href="https://www.vexels.com/vectors/preview/126981/charles-chaplin-cartoon-character">
                    <img id="charlie" src="./src/components/charles-chaplin-cartoon-character-by-Vexels.png" alt="charlie" height="200" width="200" />
                  </a>
                </div>
                <div className="col-9 align-self-center">
                  <h3 className="text-right font-italic">"No good movie is too long and no bad movie is short enough."</h3>
                  <h5 className="text-right">Roger Ebert</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row" id="row">
              <MovieDetail />
              <MovieList />
            </div>
          </div>
          <div className="footer">
            <p>The Movie Search website has been written only for educational purposes. 
              This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <p>Copyright 2018 Agnieszka Bugla</p>
          </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies, getInitialState, getMovieDetails }, dispatch);
};

export default connect (null, mapDispatchToProps) (App);   
