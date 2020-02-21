import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
border-radius: 3px;

&:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color: black;
}
`
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '3px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'white'
      }
    };

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

      // style.backgroundColor = 'red';
      // style[':hover'] =  {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    // let classes = ['red', 'bold'].join(" ");
    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }
    
    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton
          alt={this.state.showPersons} 
          // style={style}
          onClick={this.togglePersonsHandler}>
            Toggle Persons
          </StyledButton>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is really working!'))
}

// export default Radium(App);
export default App;