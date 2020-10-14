import React from 'react';
import "./Person.css";

// using ES6
const Person = (props)  => {
    const stylePerson = {
        '@media (min-width: 500px)':{
            width:'450px'
        }
    }

    return( 
        <div onClick={props.click} className='Person' style={stylePerson}>
            <p>My name is {props.name}! I amd {props.age} years old</p>
            <p>{props.children}</p>
            <input type='test' onChange={props.changes} value={props.name}/>
        </div>
    )};

export default Person;

// WHen using class-based components, it will be this.props like below
// class Person extends Component{
//     render(){
//         return <p>My name is {this.props}</p>
//     }
// }