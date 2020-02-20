import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id:"abs", name: "Max", age: 28 },
      { id: "bf", name: "Manu", age: 28 },
      { id: "dsa", name: "Sophie", age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // const [otherState, setOtherState] = useState('some other state');

  // console.log(personsState, otherState)
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!')
  //   // DON'T DO THIS: this.state.persons[0].name="Maximilian"; // warning
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Manu", age: 28 },
  //       { name: "Sophie", age: 25 }
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    // const person = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.person[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null; 

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangedHandler}>
          My Hobbies: Running
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} /> */}
      </div>
      )
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is really working!'))
}

export default App;
