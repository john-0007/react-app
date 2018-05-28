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
  
  nameChangeHandler = (event) => {
    const name = event.target.value;
    this.setState( () => ({persons: [
        {name, age: 29},
        {name, age: 20},
        {name, age: 24}
      ]})
    );
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
    const style = {
      backgroundColor: '#fff',
      border: '1px solid blue',
      padding: '8px',
      font: 'inherit',
      cursor: 'pointer'
    }
    return (
      <div className="container">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.switchNameHandler}>
          Switch Name
        </button>
        { this.state.persons.map( ({ name, age}, index) => <Person 
          name={name} 
          age={age} 
          change={this.nameChangeHandler}
          key={index}
        />)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
