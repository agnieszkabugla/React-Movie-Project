import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; 
import _ from 'lodash'; 
import SearchBar from './components/search_bar';
import MovieList from './components/movie_list'; 
import MovieListItem from './components/movie_list_item';
import MovieDetail from './components/movie_detail'; 

const API_KEY = 'ba97ad63d202b24bf9b8e972f25ea9f1'; 
const mainURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=[searchterm]`; 
const URLforDetails = `https://api.themoviedb.org/3/movie/[selectedMovieId]?api_key=${API_KEY}` ;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovie: '',
      searchResults: [],
      selectedMovie: null,
      selectedMovieId: null
    }

    this.onInputChange = this.onInputChange.bind(this); 
    this.onSubmitSearch = this.onSubmitSearch.bind(this); 
    this.onMovieSelected = this.onMovieSelected.bind(this); 
  }

  onInputChange(e) {
    this.setState({searchMovie: e.target.value}); 
  }

  onSubmitSearch(event) {
    if (event.which === 13 || event.key === 13) {
      let searchTerm = this.state.searchMovie; 
      // creating URL suitable for query 
      const newSearchTerm = searchTerm.replace(' ', '+');
      const newURL = mainURL.replace('[searchterm]', newSearchTerm);
  
     // making a get request 
      axios.get(newURL)
        .then(resp => {
          if(resp.data && resp.data.results) {
            this.setState({ searchResults: resp.data.results }); 
            this.setState({ selectedMovie: this.state.searchResults[0] }); 
          }
        })
        .catch(error => {
          console.log(error);
        });    
    }
  }

  onMovieSelected(movieId) {
    // console.log("selected!!!!!" + movieId); 
    let selectedMovie = _.find(this.state.searchResults, x => x.id == movieId); 
    // console.log(`selectedMovie: ${JSON.stringify(selectedMovie, null, 2)}`); 
    this.setState({ selectedMovie: selectedMovie }); 
    this.setState({ selectedMovieId: movieId }); 
  }

  render() {
    
    console.log(this.state);
    return (
      <div>
        <SearchBar 
          value={this.state.searchMovie} 
          onInputChange={this.onInputChange}
          onSubmitSearch={this.onSubmitSearch} />
          <div className="container">
            <div className="row">
              <MovieDetail 
                selectedMovie={this.state.selectedMovie}
                movieId={this.state.selectedMovieId} />
              <MovieList 
                searchResults={this.state.searchResults}
                onMovieSelected={this.onMovieSelected} />
            </div>
          </div>
      </div>
    );
  }
}
;
ReactDOM.render(
  <App />, 
  document.querySelector('.container'));
