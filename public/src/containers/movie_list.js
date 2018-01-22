import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import MovieListItem from './movie_list_item';

class MovieList extends Component {
    constructor(props) {
        super(props);    

    } 
    
    render() {     
        const movieItems = this.props.searchResults.map((movie) => {   
            //console.log("movie: ", movie); 
            return (
                <MovieListItem 
                    key={movie.id}
                    onClickButton={this.props.onMovieSelected}
                    movie={movie} />
            ); 
            });
        return (
            
            <ul className="col-md-4 list-group">
                {movieItems}
            </ul>
            
        ); 
    }
}

function mapStateToProps(state) {
    return {
        searchResults: state.searchResults
    };
}

export default connect (mapStateToProps) (MovieList); 