import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
        <div className="jumbotron jumbotron-fluid" id="jumbotron-color">
           <div className="container">
                <div className="links-div">
                    <a href="https://www.themoviedb.org/" >
                        <img src="../src/components/TMDB.png" id="tmdb"/>
                    </a>
                    <a href="http://www.imdb.com/">
                        <img src="../src/components/IMDB.png" id="imdb"/>
                    </a>
                </div>
               <h1 className="display-3 white-color" id="h1-font">Movie Search</h1>
               <p className="lead white-color">This is a simple movie search. Type in a title of the movie you want to find or just a part of its title. </p>
               <div className="input-group mb-2 mb-sm-0">
                   <div className="input-group-addon" id="big-search-bar">
                       <i className="fa fa-video-camera" /> 
                    </div>
                    <input 
                        className="form-control"
                        placeholder="Movie title"
                        onChange={this.props.onInputChange}
                        value={this.props.value} 
                        onKeyPress={this.props.onSubmitSearch } />
                    
               </div>
            </div> 
        </div>
        );
    }
}

export default SearchBar; 