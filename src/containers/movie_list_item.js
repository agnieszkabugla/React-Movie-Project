import React, {Component} from 'react';
import _ from 'lodash'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { getMovieDetails } from '../actions/index';
import { selectMovie } from '../actions/index'; 

let imageURL = `https://image.tmdb.org/t/p/w150/[replace]`; 

class MovieListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {showHide: 'hidden'}; 

        if (!this.props.movie) {
            return <div>Please, type in the movie title...</div>
        }

        this.toggleMoreInfo = this.toggleMoreInfo.bind(this); 
        this.onClickButton = this.onClickButton.bind(this);
    }
    
    onClickButton() {
        this.props.selectMovie(this.props.movie);
        let movieId = this.props.movie.id;
        let selectedMovie = _.find(this.props.searchResults, x => x.id == movieId); 
        this.props.getMovieDetails(movieId); 
        //console.log(movieId);
    };

    toggleMoreInfo() {
        let css = (this.state.showHide === "hidden") ? "show" : "hidden"; 
        this.setState({"showHide":css});        
    }
    render() {
        return (
            <li 
                className="list-group-item"
                onClick={this.toggleMoreInfo}
                >
                {this.props.movie.title}
                {` (${this.props.movie.release_date.slice(0,4)})`}
                <br />
                <div className={this.state.showHide}>
                    <div className="row">
                        <hr/>
                        <img className="img-responsive" src={imageURL.replace('[replace]', this.props.movie.backdrop_path )}/>
                        <hr />
                        <span 
                            onClick={this.onClickButton}
                            className="btn btn-light btn-sm btn-block">
                            Details
                        </span>
                    </div>
                </ div>
            </li>
        ); 
    }
   
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectMovie, getMovieDetails }, dispatch);
};

function mapStateToProps(state) {
    return { selectedMovie: state.selectedMovie }
};

  export default connect (mapStateToProps, mapDispatchToProps) (MovieListItem);   
  