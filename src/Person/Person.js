import React, { Component } from 'react';

// using ES6
const person = (props)  => {
    return( 
        <div>
            <p>My name is {props.name}! I amd {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )};

export default person;

// WHen using class-based components, it will be this.props like below
// class Person extends Component{
//     render(){
//         return <p>My name is {this.props}</p>
//     }
// }