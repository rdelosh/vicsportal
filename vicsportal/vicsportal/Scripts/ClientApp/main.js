import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Previewer from './components/previewer';
import Mytextarea from './components/textarea';

class MarkedDownPreviewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
        mycallbackfunction = () =>{
            
        }
    }

    render() {
        return (
            <div>
                wtfino3
            <Mytextarea />
                <Previewer />

            </div>
        );
    }
}


ReactDOM.render(<MarkedDownPreviewer />, document.querySelector(".myapp"));
