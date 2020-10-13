import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from 'radium'
import { render } from "@testing-library/react";

// summary https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8091086#notes in lecture 61

const App = () => {

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
  const styleBtnToggle = {
    backgroundColor: 'green',
    color:'white',
    font: 'inherit',
    border: '1px solid',
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
    styleBtnToggle.backgroundColor = 'red'
    styleBtnToggle.color = 'black'
    styleBtnToggle.border = '1px solid black'
  }

  let classesP = []
  if(persons.length<=2){
    classesP.push('red')
  }
  if(persons.length<=1){
    classesP.push('bold')
  }

  return (
    // className to put the styling, this is the root element
    <div className="App">
      <h1>React udemy class</h1>
      <p className={classesP.join(' ')}>This is a list of persons</p>
      <button 
        style={styleBtnToggle}
        onClick={toggleHidePersonHandler}>Toggle persons</button>
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

export default Radium(App);
