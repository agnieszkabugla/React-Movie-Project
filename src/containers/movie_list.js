import React, { Component } from 'react'; 
import MovieListItem from './movie_list_item';

class MovieList extends Component {
    constructor(props) {
        super(props);    
    }
    
    movieItems = this.props.searchResults.map((movie) => {    
        return <MovieListItem 
            key={this.movie.id}
            onClickButton={this.props.onMovieSelected}
            movie={this.movie} />
    })

    render() {
        console.log("movie list", this.props); 
        
        return (
            <ul className="col-md-4 list-group">
                {this.movieItems}
            </ul>
        ); 
    }
}

export default MovieList; 