import React from 'react'
import './Notetext.css'

export default function Notetext(props) {
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