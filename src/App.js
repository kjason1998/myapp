import React from 'react';
import './App.css';
import Person from './Person/Person'

const App = ()  => {
  
  return (
    // className to put the styling, this is the root element
    <div className="App">
      <h1>This is h1 header</h1>
      <Person />
      <Person name ="kevin" age="21"/>
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
