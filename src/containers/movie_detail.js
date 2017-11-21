import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { getInitialPage } from '../actions/index'; 
import axios from 'axios'; 

const API_KEY = 'ba97ad63d202b24bf9b8e972f25ea9f1'; 
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

        this.componentWillMount = this.componentWillMount.bind(this); 
    };

    componentWillMount() {
        this.props.getInitialPage();
    }

    render() {
        if(!this.props.selectedMovie) {
            return <div>Please, select the movie...</div>
        };

        // console.log('movie_detail props: ', this.props);

        let genreId = this.props.selectedMovie.genre_ids;
        let foundGenre = []; 
        if (Array.isArray(genreId)) {
            genreId.forEach(x => {
                if (movieGenre[x] != undefined) {
                    foundGenre.push(movieGenre[x]); 
                }
            });
        };

        let imageURL = `https://image.tmdb.org/t/p/w300/${this.props.selectedMovie.poster_path}`; 
        
        
        //TODO create a videoURL
        console.log(this.props.selectedMovieById);
        let videoID = []; 
        if(this.props.selectedMovieById && this.props.selectedMovieById.videos.results[0]) {
            let videoResults = this.props.selectedMovieById.videos.results;
            console.log('videos', videoResults);
            videoID.push(videoResults[0].key); 
            console.log(videoID);
        }
        let videoURL = `https://www.youtube.com/embed/${videoID}`;
        

        return (
            
                <div className="col-md-8">
                  
                        <div className="container-fluid">
                            <div className="d-flex p-2 bg-light">
                                <h3>
                                    {this.props.selectedMovie.title}  
                                    {` (${this.props.selectedMovie.release_date.slice(0,4)})`}
                                </h3>
                            </div>
                        </div>
                        
                        {this.props.selectedMovieById ? (  
                            <div className="container-fluid">
                                <div className="d-flex p-2 bg-light">
                                    <h5>{this.props.selectedMovieById.tagline}</h5>
                                    <br />
                                </div>
                            </div>
                        ) : (<p />) }

                        <hr />
                        
                        <p className="text-center">GENRE: {foundGenre.join(", ")}</p>
                        <hr />

                        {this.props.selectedMovieById ? (
                            <p className="text-center">Production country: {this.props.selectedMovieById.production_countries.map((country => 
                                <li key={country.name}>{country.name}</li>))}
                            </p>
                        ) : (<p></p>)}

                        <div className="container">
                            <div className="row">
                                <img className="img-responsive" src={imageURL} />
                                <p>{this.props.selectedMovie.overview}</p>
                            </div>
                        </div>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src={videoURL} allowFullScreen></iframe>
                         </div>
                         <hr />
                </div>
 
        ); 
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({ getInitialPage }, dispatch );
};

function mapStateToProps(state) {
    return { 
        selectedMovie: state.selectedMovie,
        selectedMovieById: state.selectedMovieById
     }
};

export default connect (mapStateToProps, mapDispatchToProps) (MovieDetail);
