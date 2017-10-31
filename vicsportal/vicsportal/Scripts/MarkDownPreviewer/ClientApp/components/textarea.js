import React, { Component } from 'react';


class mytextarea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-6 mytextarea">
                <h1>MarkDown</h1>
                <textarea 
                onChange={event => {
                    this.props.textchange(event.target.value);
                }}>

                </textarea>
            </div>
                );
    }
}

export default mytextarea;