import React, { useState } from 'react';

const PersonCard = (props) => {

const{ageObj, setAgeObj} = useState(props.age)

const incrementOneAge = () => {
  setAgeObj(ageObj+1)
}

    return (
      <div>
        <h2>{props.f_name}{props.l_name}</h2>
        <p>Age: {ageObj}</p>
        <p>hair color: {props.hairColor}</p>
     
     <button onClick={incrementOneAge} >Birthday button for {props.firstname} {props.lastname} </button>
    </div>
    
    );
};

export default PersonCard;
