import React, { Component } from 'react';
import "./Person.css";

// using ES6
const Person = (props)  => {
    return( 
        <div className='Person'>
            <p>My name is {props.name}! I amd {props.age} years old</p>
            <p onClick={props.click}>{props.children}</p>
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