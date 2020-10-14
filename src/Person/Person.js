import React from "react";
import styled from "styled-components";
//import "./Person.css"; - we use styled-component instead

const DivStyled = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 3px #cccccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`; // inside `` is regular css

// using ES6
const Person = (props) => {
  return (
    <DivStyled onClick={props.click}>
      <p>
        My name is {props.name}! I amd {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="test" onChange={props.changes} value={props.name} />
    </DivStyled>
  );
};

export default Person;

// WHen using class-based components, it will be this.props like below
// class Person extends Component{
//     render(){
//         return <p>My name is {this.props}</p>
//     }
// }
