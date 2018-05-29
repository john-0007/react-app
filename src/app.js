import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Person from './components/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'vvsdfas', name: 'John', age: 29},
      {id: 'vdsfdfs', name: 'jo', age: 20},
      {id: 'vdjkljs', name: 'jonny', age: 24}
    ],
    showPerson: false
  }
  
  nameChangeHandler = (event, id) => {
   const name = event.target.value;
   const personIndex = this.state.persons.findIndex( person => person.id === id);
   this.setState( previousState => {
    const persons = [...previousState.persons];
    persons[personIndex].name = name;
    return { persons } ;
   });
  }
  
  togglePersonHandler = () => {
    this.setState((previousState) => ({
      showPerson: !previousState.showPerson
    }));
  }

  personDeleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState(() => ({ persons }));
  }

  render() {
    const style = {
      backgroundColor: '#fff',
      border: '1px solid blue',
      padding: '8px',
      font: 'inherit',
      cursor: 'pointer'
    };
    let person = null; 

    if (this.state.showPerson) {
      person = (
        this.state.persons.map( ({ name, age, id}, index) => <Person 
          name={name} 
          age={age} 
          change={(event) => this.nameChangeHandler(event, id)}
          click={() => this.personDeleteHandler(id)}
          key={id}
        />)
      );
    }
    return (
      <div className="container">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        { person }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
