import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import { render } from "@testing-library/react";

const App = () => {
  // this is another example of useState that have 2 state value - it is a lot better to separate it
  const [otherExampleState, setOtherExampleState] = useState({
    persons: [
      { name: "person1", age: 1 },
      { name: "person2", age: 2 },
      { name: "person3", age: 3 },
    ],
    otherValue: "someOtherValue",
  });
  const [persons, setPersons] = useState([
    { name: "Babayaga", age: 21 },
    { name: "oldest kevin", age: 232 },
    { name: "h20", age: 99 },
  ]);
  const [person, setPerson] = useState({ name: "kevin fist", age: 99999 });

  const onClickListenerChangeNamePerson = (newName) => {
    setPerson({ ...person, name: newName });
  };

  // using event
  const nameChangeHandler = (event) => {
    setPerson({ ...person, name: event.target.value });
  };

  const onClickListenerExampleForArray = () => {
    setPersons({
      persons: [
        { name: "person1change", age: 11 },
        { name: "person2change", age: 21 },
        { name: "person3change", age: 31 },
      ],
    });
  };

  const onClickTypeSomethingInLog = () => {
    console.log('it is clicked!')
  }

  const [hidePersons,setHidePersons] = useState(false)

  const toggleHidePersonHandler = () => {
    if(hidePersons){
      setHidePersons(false)
    }else{
      setHidePersons(true)
    }
  }

  // this is called in line styling - cannot use the full power of css
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor:'pointer',  
  };

  let personsView = null;

  if(!hidePersons){
    personsView = (
      <div>
        <Person name={person.name} age={person.age} changes={nameChangeHandler}/>
        {persons.map((person) => (
          <Person 
            name={person.name} 
            age={person.age} />
        ))}
        <Person 
          name="Try this one please" 
          age="24" 
          click={onClickTypeSomethingInLog}>
          My o my
        </Person>
    </div>
    );
  }

  return (
    // className to put the styling, this is the root element
    <div className="App">
      <h1>This is h1 header</h1>
      <button 
        style={style}
        onClick={toggleHidePersonHandler}>Toggle persons</button>
      <button onClick={onClickListenerChangeNamePerson.bind(this,'other way to pass param')}>My Amazing second Button</button>
      {personsView}
    </div>
  );
  // return React.createElement('div', {className: 'app'}, React.createElement('h1',null,'This is h1 header'));
  // on top is doing same thing as bellow - thus we need React import
  // return (
  //   // className to put the styling
  //   <div className="App">
  //     <h1>This is h1 header</h1>
  //   </div>
  // );
};

export default App;
