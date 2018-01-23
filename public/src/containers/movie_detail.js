import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { getInitialPage } from '../actions/index'; 
//import { getImdbDetails } from '../actions/index'; 
import axios from 'axios'; 
import PropTypes from 'prop-types';

const API_KEY = process.env.APIKEY; 
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
        this.onClickButton = this.onClickButton.bind(this); 
    }

    // before the components mounts send an axios request to get 
    // the most popular movie today from the moviedb api
    componentWillMount() {
        this.props.getInitialPage();
    }

    //get IMDB rating and IMDB details 
    onClickButton() {
        //console.log("movielistitem: ", this.props.selectedMovieById); 
        if (this.props.selectedMovieById) {
            let imdbID = this.props.selectedMovieById.imdb_id; 
            //this.props.getImdbDetails(imdbID);
        } 
    }

    render() {
        if(!this.props.selectedMovie) {
            return <div>Please, select the movie...</div>;
        }

        //create an array with genres matching selected movie
        // use movieGenre object declared at the top of this file
        //console.log(this.props); 
        let genreId = this.props.selectedMovie.genre_ids;
        let foundGenre = []; 
        if (Array.isArray(genreId)) {
            genreId.forEach(x => {
                if (movieGenre[x] != undefined) {
                    foundGenre.push(movieGenre[x]); 
                }
            });
        }

        let imageURL = `https://image.tmdb.org/t/p/w300/${this.props.selectedMovie.poster_path}`; 
        
        //create video URL based on selectedMovieById prop
        //console.log(this.props.selectedMovieById);
        let videoID = []; 
        if(this.props.selectedMovieById && this.props.selectedMovieById.videos.results[0]) {
            let videoResults = this.props.selectedMovieById.videos.results;
            //console.log('videos', videoResults);
            videoID.push(videoResults[0].key); 
            //console.log(videoID);
        } 
        let videoURL = `https://www.youtube.com/embed/${videoID}`;    

        return (
                    <div className="col-md-8">
                    {/* If the user has not typed or selected any movie yet, it shows the most popular movie  */}
                    {/* according to the moviedb api */}
                    {!this.props.selectedMovieById ? (
                        <div className="the-best row">
                            {/* <div className="col-2"><i className="fa fa-trophy fa-3x float-left"></i></div> */}
                            <div className="col-12">
                                <h4 className="text-center align-middle" id="h4-font">The most popular movie today: </h4>
                                <hr className="fade-away"/>
                            </div>
                        </div>
                    ) : (<p />)}
                    {/* render movie title */}
                        <div className="container-fluid">
                            <div className="d-flex p-2">
                                <h3 className="title">
                                    {this.props.selectedMovie.title}  
                                    {` (${this.props.selectedMovie.release_date.slice(0,4)})`}
                                </h3>
                            </div>
                        </div>
                        
                        {/* render a tagline, if there is any */}
                        {this.props.selectedMovieById ? (  
                            <div className="container-fluid">
                                <div className="d-flex p-2 ">
                                    <h5 className="text-center tagline">{this.props.selectedMovieById.tagline}</h5>
                                    <br />
                                </div>
                                <hr  className="fade-away"/>
                            </div>
                        ) : (<p />)}

                        {/* render a movie genre */}
                        {foundGenre.length >= 1 ? (
                            <p className="text-center genre"><b>GENRE: </b>{foundGenre.join(", ")}</p>
                        ) : (<p />)}
                        
                        {/* render a production country */}
                        {this.props.selectedMovieById && this.props.selectedMovieById.production_countries.length >= 1 ? (
                            <p className="text-center country"><b>Production country: </b>{this.props.selectedMovieById.production_countries.map((country => 
                                <li key={country.name}>{country.name}</li>))}
                            </p>
                        ) : (<p />)}

                        {/* render a poster  and movie overview */}
                        <div className="container">
                            <div className="row">
                                <img className="img-responsive poster" src={imageURL} />
                                <p className="overview">{this.props.selectedMovie.overview}</p>
                                <br />
                            </div>
                        </div>

                        {/* a button to get IMDB rating */}
                        {/* {this.props.selectedMovieById ? ( 
                        <div>
                            <span
                                onClick={this.onClickButton}
                                className="btn btn-light btn-sm btn-block">
                                Do you want to know IMDB rating? Click me.
                            </span>
                            { (this.props.ImdbDetails) ? `IMDB RATING: ${this.props.ImdbDetails.rating}` : <p /> }
                        </div>
                        ) : (<p />)} */}

                        {/* render a movie trailer from youtube */}
                        {videoID.length >= 1 ? (
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={videoURL} allowFullScreen></iframe>
                            </div>
                        ) : (<p></p>)}
                        <hr className="fade-away" />
                </div>
        ); 
    }
}

MovieDetail.propTypes = {
    getInitialPage: PropTypes.func,
    selectedMovieById: PropTypes.array,
    selectedMovie: PropTypes.object 
}; 

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({ getInitialPage }, dispatch );
}

function mapStateToProps(state) {
    return { 
        selectedMovie: state.selectedMovie,
        selectedMovieById: state.selectedMovieById
        //ImdbDetails: state.ImdbDetails
     };
}

export default connect (mapStateToProps, mapDispatchToProps) (MovieDetail);
