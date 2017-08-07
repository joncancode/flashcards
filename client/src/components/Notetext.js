import React from 'react'
import { connect } from 'react-redux'

import './Notetext.css'

export function Notetext(props) {
    return (
        <div className="notetext">
            <h4>Vocab word</h4>
            <p>description</p>
        </div>
    );
};

Notetext.defaultProps = {
    text: 'testing'
};


export default connect()(Notetext);