import React from 'react';

import './Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Test board'
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
        this.props.history.push(`/board/${this.slugify(this.state.text)}`);
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
