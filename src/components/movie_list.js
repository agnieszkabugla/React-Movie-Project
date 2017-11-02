import React, { Component } from 'react'; 
import MovieListItem from './movie_list_item';

class MovieList extends Component {
    constructor(props) {
        super(props);    

    } 
    
    render() {     
        const movieItems = this.props.searchResults.map((movie) => {   
            return <MovieListItem 
                key={movie.id}
                onClickButton={this.props.onMovieSelected}
                movie={movie} />
            });
        return (
            <ul className="col-md-4 list-group">
                {movieItems}
            </ul>
        ); 
    }
}

export default MovieList; 