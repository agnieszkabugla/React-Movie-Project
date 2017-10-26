import React from 'react'; 
import MovieListItem from './movie_list_item';

const MovieList = (props) => {
    
    const movieItems = props.searchResults.map((movie) => {
        return <MovieListItem 
            key={movie.id}
            onClickItem={props.onClickItem}
            movie={movie} />
    })

    return (
        <div className="container">
            <div className="row justify-content-end">
                <ul className="col-md-4 list-group">
                    {movieItems}
                </ul>
            </div>
        </div>
    ); 
}

export default MovieList; 