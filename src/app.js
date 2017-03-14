import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React App Loaded!</h1>
                <p>Good work!</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));