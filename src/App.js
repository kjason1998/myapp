import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = ()  => {
  // this is another example of useState
  const [otherExampleState,setOtherExampleState] = useState({
    persons:[
      {name:'person1',age:1},{name:'person2',age:2},{name:'person3',age:3}
    ],
    otherValue: 'someOtherValue'
  })
  const [persons,setPersons] = useState([{name:'Babayaga',age:21},{name:'oldest kevin',age:232},{name:'h20',age:99}])
  const [person, setPerson] = useState({name:'kevin fist',age:99999})

  const onClickListener = () => {
    setPerson({...person,name:'not kevin anymore :C'})
  }

  return (
    // className to put the styling, this is the root element
    <div className="App">
      <h1>This is h1 header</h1>
      <Person name={person.name} age={person.age}/>
      <button onClick={onClickListener}>My Amazing Button</button>
      {persons.map(person => <Person name={person.name} age={person.age} />)}
      <Person name ="kevin no" age="24">My o my</Person>
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
}

export default App;
