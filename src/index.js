import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; 
import SearchBar from './components/search_bar';
import MovieList from './components/movie_list'; 
import MovieListItem from './components/movie_list_item';
import MovieDetail from './components/movie_detail'; 

const API_KEY = 'ba97ad63d202b24bf9b8e972f25ea9f1'; 
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=[searchterm]`; 
// https://api.themoviedb.org/3/search/movie?api_key=ba97ad63d202b24bf9b8e972f25ea9f1&language=en-US&query=Harry+Potter

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovie: '',
      searchResults: [],
      selectedMovie: null
    }

    this.onInputChange = this.onInputChange.bind(this); 
    this.onSubmitSearch = this.onSubmitSearch.bind(this); 
    this.onClickItem = this.onClickItem.bind(this); 
  }

  onInputChange(e) {
    this.setState({searchMovie: e.target.value}); 
  }

  onSubmitSearch(event) {
    if (event.which === 13 || event.key === 13) {
      let searchTerm = this.state.searchMovie; 
      // creating URL suitable for query 
      const newSearchTerm = searchTerm.replace(' ', '+');
      const newURL = URL.replace('[searchterm]', newSearchTerm);
  
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

  onClickItem(e) {
    console.log(e.movie);  
    this.setState({ selectedMovie: e.target}); 
  }

  render() {
    
    console.log(this.state);
    return (
      <div>
        <SearchBar 
          value={this.state.searchMovie} 
          onInputChange={this.onInputChange}
          onSubmitSearch={this.onSubmitSearch} />
        <MovieList 
          searchResults={this.state.searchResults}
          onClickItem={this.onClickItem} />
        {/* <MovieListItem 
          onClickItem={this.onClickItem} /> */}
        <MovieDetail 
          selectedMovie={this.state.selectedMovie} />
      </div>
    );
  }
}
;
ReactDOM.render(
  <App />, 
  document.querySelector('.container'));
