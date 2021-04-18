import React, { Component } from 'react';

class Rating extends Component {
    state={
        rating:0
    };
    render() {
        return (
            <React.Fragment>
                <span class="rating-text" className="badge badge-primary m-2">{this.state.rating}</span>
            </React.Fragment>
        );
    }

}
 
export default Rating;