import React from 'react';
import './App.css';

function App() {
  return (
    // className to put the styling, this is the root element
    <div className="App">
      <h1>This is h1 header</h1>
      <p>This is a p</p>
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
