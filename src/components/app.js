import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { fetchMovies } from '../actions/index'; 
import { getInitialState } from '../actions/index'; 
import axios from 'axios'; 
import _ from 'lodash'; 

import SearchBar from '../containers/search_bar';
import MovieList from '../containers/movie_list'; 
import MovieListItem from '../containers/movie_list_item';
import MovieDetail from '../containers/movie_detail'; 

const API_KEY = 'ba97ad63d202b24bf9b8e972f25ea9f1'; 

// const popularityURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const URLforDetails = `https://api.themoviedb.org/3/movie/[selectedMovieId]?api_key=${API_KEY}&append_to_response=videos`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovie: '',
      // searchResults: [],
      selectedMovieById: null,
      selectedMovie: null
    }

    this.onInputChange = this.onInputChange.bind(this); 
    this.onSubmitSearch = this.onSubmitSearch.bind(this); 
    this.onMovieSelected = this.onMovieSelected.bind(this); 
  };

  onInputChange(event) {
    this.setState({searchMovie: event.target.value}); 
  };

  onSubmitSearch(event) {
    if (event.which === 13 || event.key === 13) {
      this.props.fetchMovies(this.state.searchMovie);
    //   // creating URL suitable for query 
    //   let searchTerm = this.state.searchMovie.replace('', '+'); 
    //   const newURL = mainURL.replace('[searchterm]', searchTerm);
  
    //  // making a get request 
    //   axios.get(newURL)
    //     .then(resp => {
    //       if(resp.data && resp.data.results) {
    //         this.setState({ searchResults: resp.data.results }); 
    //         this.setState({ selectedMovie: resp.data.results[0] }); 
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });    
    }
  }

  onMovieSelected(movieId) { 

    if(this.props.selectedMovie === null) {
     // this.props.getInitialState(this.state.selectedMovie); 
    //   axios.get(popularityURL)
    //   .then(resp => {
    //     this.setState({selectedMovie: resp.data.results[0]});
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });   
    // }
    }
    let selectedMovie = _.find(this.state.searchResults, x => x.id == movieId); 
    let searchterm = URLforDetails.replace('[selectedMovieId]', movieId);

    axios.get(searchterm)
      .then(resp => {
        // console.log(resp);
        this.setState({ 
          selectedMovieById: resp.data,
          selectedMovie: selectedMovie
        });
      })
      .catch(error => {
        this.setState({ selectedMovie: selectedMovie });
      });
  }

  render() {
    
    return (
      <div>
        <SearchBar 
          value={this.state.searchMovie} 
          onInputChange={this.onInputChange}
          onSubmitSearch={this.onSubmitSearch} />
          <div className="container">
            <div className="row">
              <MovieDetail 
               /* searchResults={this.state.searchResults} */
               /* selectedMovie={this.state.selectedMovie} */
               /* onMovieSelected={this.onMovieSelected} */
                selectedMovieById={this.state.selectedMovieById} />
              <MovieList
                /* searchResults={this.state.searchResults} */
                /* onMovieSelected={this.onMovieSelected} */ 
                />
            </div>
          </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies, getInitialState }, dispatch);
};

export default connect (null, mapDispatchToProps) (App);   
