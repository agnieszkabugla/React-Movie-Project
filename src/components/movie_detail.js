import React, {Component} from 'react'; 
import axios from 'axios'; 
import _ from 'lodash'; 

const movieGenre = {
    28: 'action',
    12: 'adventure',
    16: 'animation',
    35: 'comedy',
    80: 'crime',
    99: 'documentary',
    18: 'drama',
    10751: 'family',
    14: 'fantasy',
    36: 'history',
    27: 'horror',
    10402: 'music',
    9648: 'mystery',
    10749: 'romance',
    878: 'science fiction',
    10770: 'TV movie',
    53: 'thiller',
    10752: 'war',
    37: 'western'
};

class MovieDetail extends Component {
    constructor(props) {
        super(props); 
        this.state = {currentMovie: ''};
    };
    
    render() {
        if(!this.props.selectedMovie) {
            return <div>Please, type in the movie title...</div>
        }; 

        let genreId = this.props.selectedMovie.genre_ids;
        let foundGenre = []; 
        if (Array.isArray(genreId)) {
            genreId.forEach(x => { // x = 23 
                if (movieGenre[x] != undefined) {
                    foundGenre.push(movieGenre[x]); 
                }
            });
        };

        let imageURL = `https://image.tmdb.org/t/p/w300/${this.props.selectedMovie.poster_path}`; 

        return (
                <div className="col-md-8">
                        <h3>{this.props.selectedMovie.title}  {` (${this.props.selectedMovie.release_date.slice(0, 4)})`}</h3>
                        <p>{foundGenre.join(", ")}</p>
                        <div className="container">
                            <div className="row">
                                <img className="img-responsive" src={imageURL} />
                                <p>{this.props.selectedMovie.overview}</p>
                            </div>
                        </div>
                </div>
 
        ); 
    }
};

export default MovieDetail;