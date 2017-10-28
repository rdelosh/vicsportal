import React from 'react';
import marked from 'marked';


const previewer = (props) => {
    return (
        <div className="col-md-6 mypreviewer">
            <h1>Preview</h1>
            <div dangerouslySetInnerHTML={{ __html: marked(props.providedstate.text) }} />
        </div>
    );

};
export default previewer;