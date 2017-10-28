import React from 'react'; 

const MovieListItem = (props) => {
    // console.log(props);
    if (!props.movie) {
        return <div>Please, type in the movie title...</div>
    }

    function onClickItem() {
        props.onClickItem(props.movie.id); 
    };

    let imageURL = `https://image.tmdb.org/t/p/w150/${props.movie.backdrop_path}`; 
    

    return (
        <li 
            className="list-group-item"
            >
            {props.movie.title}
            {` (${props.movie.release_date.slice(0, 4)})`}
            <br />
            <img src={imageURL}/>
            <br />
            <span 
                onClick={onClickItem}
                className="btn btn btn-outline-info btn-sm">
                Details
            </span>
        </li>
    ); 
}

export default MovieListItem; 