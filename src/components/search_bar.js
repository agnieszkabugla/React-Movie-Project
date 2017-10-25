import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { xx: '' }; 
    }

    render() { 
        return (
        <div>
          <input 
            placeholder="Movie title"
            onChange={this.props.onInputChange}
            // the value changes when the state changes! 
            // we don't update state in this component so the value never changes!
            // it's called controlled component
            value={this.props.value} 
            onKeyPress={this.props.onSubmitSearch} />
            {/* value of the input {this.props.value} */}
            {/* <button 
                type="submit"
 >
                Search
            </button> */}
        </div>
        );
    }

}

export default SearchBar; 