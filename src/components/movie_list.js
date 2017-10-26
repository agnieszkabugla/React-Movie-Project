import React from 'react'; 

const MovieList = (props) => {
    return (
        <div>
            <ul className="col-md-4 list-group">
                {props.searchResults.length}
            </ul>
        </div>
    ); 
}

export default MovieList; 