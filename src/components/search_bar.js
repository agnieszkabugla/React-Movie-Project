import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { xx: '' }; 
    }

    render() { 
        return (
        <div className="jumbotron jumbotron-fluid">
           <div className="container">
               <h1 className="display-3">Movie Search</h1>
               <p className="lead">This is a simple movie search. Type in a title of the movie you want to find or just a part of its title. </p>
               <div className="input-group">
                    <input 
                        className="form-control"
                        placeholder="Movie title"
                        onChange={this.props.onInputChange}
                        // the value changes when the state changes! 
                        // we don't update state in this component so the value never changes!
                        // it's called controlled component
                        value={this.props.value} 
                        onKeyPress={this.props.onSubmitSearch} />
                        {/* value of the input {this.props.value} */}
               </div>
            </div> 
        </div>
        );
    }

}

export default SearchBar; 