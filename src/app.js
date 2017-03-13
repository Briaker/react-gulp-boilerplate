import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './searchbar';

console.log('react app loaded!');

class App extends React.Component {
    render() {

        const displayName = (name) => {
            return (<p>{name}</p>);
        }

        const userName = displayName('Brian');

        return (
            <div>
                <h1>React App Loaded!</h1>
                <p>Good work!</p>
                {userName}
                <Searchbar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));