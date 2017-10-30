import React, {Component} from 'react'; 

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
        this.props.onClickButton(this.props.movie.id); 
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
                {` (${this.props.movie.release_date.slice(0, 4)})`}
                <br />
                <div className={this.state.showHide}>
                    <div className="row">
                        <hr/>
                        <img className="img-responsive" src={imageURL.replace('[replace]', this.props.movie.backdrop_path )}/>
                        <hr />
                        <span 
                            onClick={this.onClickButton}
                            className="btn btn-outline-info btn-sm btn-block">
                            Details
                        </span>
                    </div>
                </ div>
            </li>
        ); 
    }
   
}

export default MovieListItem; 