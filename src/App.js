import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import { render } from "@testing-library/react";

// summary https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8091086#notes in lecture 61

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
    { id:'it is a key', name: "Babayaga", age: 21 },
    { id:'key need to be unique and not related to index',name: "oldest kevin", age: 232 },
    { id:'it is only dummy keys', name: "h20", age: 99 },
  ]);
  const [person, setPerson] = useState({ name: "kevin fist", age: 99999 });

  // example of using bind to pass something in the method
  const onClickListenerChangeNamePerson = (newName) => {
    setPerson({ ...person, name: newName });
  };

  // using event
  const nameChangeHandler = (event) => {
    setPerson({ ...person, name: event.target.value });
  };

  // Changing value of name of a person with the id inside the parameter.
  const nameChangeHandlerOnArray = (event, id) => {
    // get the index of the person with the unique id in the parameter
    const personIndex = persons.findIndex(eachPerson =>{
      return eachPerson.id === id
    })

    /**
     * Instead of accessing the person and changes it
     * better to make a new person object with the old Information 
     * with the use of spread operator
     **/ 
    const personCopy = {...persons[personIndex]}
    // we can also use
    // const person = Object.assign({},persons[personIndex])

    personCopy.name = event.target.value

    const personsCopy = [...persons]


    personsCopy[personIndex] = personCopy
    console.log(personsCopy)
    setPersons(personsCopy);
  };

  const onClickListenerExampleForArray = () => {
    setPersons({
      persons: [
        { name: "person2change", age: 21 },
        { name: "person1change", age: 11 },
        { name: "person3change", age: 31 },
      ],
    });
  };

  const [hidePersons,setHidePersons] = useState(false)

  const toggleHidePersonHandler = () => {
    if(hidePersons){
      setHidePersons(false)
    }else{
      setHidePersons(true)
    }
  }

  // other way to pass param into a method (other way is using bind)
  const onDeleteHandler = (personIndex) => {
    const tempPersons = [...persons]
    tempPersons.splice(personIndex,1)
    setPersons(tempPersons);
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
        {persons.map((person,index) => (
          <Person 
            click={() => onDeleteHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changes={(event) => nameChangeHandlerOnArray(event, person.id)}/>
        ))}
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
