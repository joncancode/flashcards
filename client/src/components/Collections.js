import React from 'react';

import './Collections.css';

// :category
//req.params.category
//Post.find({ category })

export default class Collections extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'javascript'
        }
    }

    setText(text) {
        this.setState({
            text
        });
    }

    slugify(text) {
        return text
            .toString()
            .toLowerCase()
            .replace(/[\s\W-]+/g, '-');
    }

    seeCollections(event) {
        event.preventDefault();
        this.props.history.push(`/notes/`);
       // this.props.history.push(`/api/notes/${this.slugify(this.state.text)}`);
    }

    render() {
        return (
            <div className="home-page">
                {/* <h2>Welcome to Note Hero</h2> */}
                <form onSubmit={e => this.seeCollections(e)}>
                    {/* <input type="text" value={this.slugify(this.state.text)}
                        onChange={e => this.setText(e.target.value)} /> */}
                    <button>See your collections</button>
                </form>
            </div>
        );
    }
}
