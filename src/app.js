import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './searchbar';

console.log('react app loaded!');

class App extends React.Component {
    displayName(name) {
        return (<p>{name}</p>);
    }

    render() {
        return (
            <div>
                <h1>React App Loaded!</h1>
                <p>Good work!</p>
                {this.displayName('Brian')}
                <Searchbar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));