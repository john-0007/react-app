import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Person from './components/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'John', age: 29},
      {name: 'jo', age: 20},
      {name: 'jonny', age: 24}
      
    ]
  }

  switchNameHandler = () => {
    this.setState( () => ({persons: [
        {name: 'John!!', age: 29},
        {name: 'jo!!', age: 20},
        {name: 'jonny!!', age: 24}
      ]})
    );
  }

  render() {
    return (
      <div className="container">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        { this.state.persons.map( ({ name, age}) => <Person name={name} age={age}/>)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
