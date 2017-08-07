import React from 'react'
import './Notetext.css'

export default function Notetext(props) {
    return (
        <div className="notetext">
            <p>Hello</p>
        </div>
    );
};

Notetext.defaultProps = {
    text: 'testing'
};