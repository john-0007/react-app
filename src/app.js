import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Person from './components/Person';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Person />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
