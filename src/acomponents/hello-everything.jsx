import { useState } from "react";
import "./styles.css";

export function HelloWorld({ person, toDo }) {
  const clickHandler = () => {
    alert(`Hello ${name}!`);
  };

  const changeHandler = (event) => {
    alert(`The value of the checkbox is ${event.target.checked}`);
  };

  const { name, surname } = person;
  const { first, second, third } = toDo;
  const names = ["Jhon", "Mary", "Jane"];
  return (
    <>
      <h1>
        Hello {name} {surname}! Hello {name} {surname}!
      </h1>
      <h3 className="helloWorld">Eerst {first}</h3>
      <h3>Tweede {second}</h3>
      <h3>Derde {third}</h3>

      <button onClick={clickHandler}>Say Hello!</button>
      <input type="checkbox" onChange={changeHandler} />
      <ul>
        {names.map((name, index) => {
          const uniqueKey = index;
          return <li key={uniqueKey}>{name}</li>;
        })}
      </ul>
    </>
  );
}
