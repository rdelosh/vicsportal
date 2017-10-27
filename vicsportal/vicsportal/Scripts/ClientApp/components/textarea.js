import React, { Component } from 'react';
import marked from 'marked';

class mytextarea extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return <textarea value={this.state.term}
            onChange={event => {
                this.setState({ term: event.target.value })
                //console.log(marked(this.state.term));
            }}>
        </textarea>;
    }
}

export default mytextarea;