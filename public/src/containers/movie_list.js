import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import MovieListItem from './movie_list_item';
import PropTypes from 'prop-types';

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

MovieList.propTypes = {
    searchResults: PropTypes.array,
    onMovieSelected: PropTypes.func
}; 

function mapStateToProps(state) {
    return {
        searchResults: state.searchResults
    };
}

export default connect (mapStateToProps) (MovieList); 