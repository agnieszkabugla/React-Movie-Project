import React from 'react'; 

const MovieListItem = (props) => {
    console.log(props);
    if (!props.movie) {
        return <div>Loading...</div>
    }
    return (
        <li 
            className="list-group-item list-group-item-secondary"
            onClick={props.onClickItem}
            >
            {props.movie.title}
            <br />
            {props.movie.release_date}
        </li>
    ); 
}

export default MovieListItem; 