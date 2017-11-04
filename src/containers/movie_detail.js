import React, {Component} from 'react'; 
import { connect } from 'react-redux';
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
        this.state = {
            selectedMovieById: null
        };
    };
    
    // TODO Update state SELECTEDMOVIEbyID
    // changeState(){
    //     console.log(this.props.onMovieSelected);
    //     this.props.changeState(this.props.onMovieSelected.selectedMovieById);
    //     this.setState({selectedMovieById: this.props.changeState}); 
    // } 


    render() {
        if(!this.props.selectedMovie) {
            return <div>Please, select the movie...</div>
        };

        console.log(this.state);

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
        // console.log(this.props.selectedMovieById.videos.results);
        // let videoURL = `https://www.youtube.com.embed/${videoID}`;

        return (
            
                <div className="col-md-8">

                        {!this.props.selectedMovieById ? (
                            <div className="container-fluid">
                                <div className="d-flex p-2 bg-light">
                                    <h3>The most popular movie today: </h3>
                                </div>
                            </div>
                        ) : (<p />) } 

                        <div className="container-fluid">
                            <div className="d-flex p-2 bg-light">
                                <h3>
                                    {this.props.selectedMovie.title}  
                                    {` (${this.props.selectedMovie.release_date})`}
                                </h3>
                            </div>
                        </div>
                        
                        {/*{this.props.selectedMovieById ? ( 
                            <div className="container-fluid">
                                <div className="d-flex p-2 bg-light">
                                    <h5>{this.props.selectedMovieById.tagline}</h5>
                                    <br />
                                </div>
                            </div>
                        ) : (<p />) } */}

                        <hr />
                        
                        <p className="text-center">GENRE: {foundGenre.join(", ")}</p>
                         {/* {<p>Production country: {this.country}</p>}  */}
                        {/* <h5>{this.props.selectedMovieById.production_countries.map((country => {<li>{country.name}</li>}))}</h5> */}

                        {/*{this.props.selectedMovieById ? (
                            <p>Production country: {this.props.selectedMovieById.production_countries.map((country => {<ul>{country.name}</ul>}))}</p>
                        ) : (<p></p>)} */}

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

function mapStateToProps(state) {
    return { selectedMovie: state.selectedMovie };
}

export default connect (mapStateToProps) (MovieDetail);