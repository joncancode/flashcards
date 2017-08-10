import React from 'react';

import './Collections.css';

export default class Collections extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Find Notes'
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

    goToBoard(event) {
        event.preventDefault();
        this.props.history.push(`/api/notes/`);
        // this.props.history.push(`/api/notes/${this.slugify(this.state.text)}`);
    }

    render() {
        return (
            <div className="home-page">
                <h2>Welcome to Note Hero</h2>
                <form onSubmit={e => this.goToBoard(e)}>
                    <input type="text" value={this.slugify(this.state.text)}
                        onChange={e => this.setText(e.target.value)} />
                    <button>Go to board</button>
                </form>
            </div>
        );
    }
}
