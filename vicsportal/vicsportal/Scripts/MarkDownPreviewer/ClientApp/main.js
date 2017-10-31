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
    }

    textchange(myterm) {
        
        this.setState({
            text: myterm     
        }, function() {
            console.log(this.state);    
        });
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Mytextarea  textchange={term => this.textchange(term)} />
                    <Previewer providedstate={this.state} />
                </div>
            

            </div>
        );
    }
}


ReactDOM.render(<MarkedDownPreviewer />, document.querySelector(".myapp"));
