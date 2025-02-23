// import React from "react";
// import "./Form.css";

// class Form extends React.Component {
//   render() {
//     return (
//       <form>
//         <input id="values" name="values" type="text" />
//         <select id="operation" name="operation">
//           <option value=""></option>
//           <option value="sum">sum</option>
//           <option value="average">average</option>
//           <option value="mode">mode</option>
//         </select>
//         <button type="submit">Calculate</button>
//       </form>
//     );
//   }
// }

import { useState } from "react";
import "./Form.css";

const Form = ({ calculation, setCalculation }) => {
  const [select, setSelect] = useState("");
  const [numbers, setNumbers] = useState("");
  const [error, setError] = useState('')
  //const [calculation, setCalculation] = useState(null)

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelect(value);
  };

  const handleNumbers = (e) => {
    const { value } = e.target;
    setNumbers(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let array = numbers.split(",");

    if (!select) {
      setCalculation("Invalid input.");

    } else if (select === "sum") {
      if(!array.reduce((a, b) => Number(a) + Number(b))){
        setCalculation("Invalid input.")
        setError('error')
      }else{
        setCalculation(array.reduce((a, b) => Number(a) + Number(b)));
        setNumbers('')
        setSelect('')
        setError('')
      }
    } else if (select === "average") {
      if(!array.reduce((a, b) => Number(a) + Number(b)) / array.length){
        setCalculation("Invalid input.")
        setError('error')
      }else{
        setCalculation(
          array.reduce((a, b) => Number(a) + Number(b)) / array.length
          );
          setNumbers('')
          setSelect('')
          setError('')
      }
    } else if (select === "mode") {
      if(!array.reduce((a, b) => Number(a) + Number(b)) / array.length){
        setCalculation("Invalid input.")
        setError('error')
      }else{

        let object = {};
        array.forEach((number) =>
          object[number] ? object[number]++ : (object[number] = 1)
        );
        let mode = 0;
  
        for (let key in object) {
          const value = object[key];
          if (value > mode) {
            mode = value;
  
            setCalculation(key);
          }
        }
        setNumbers('')
        setSelect('')
        setError('')
        }
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className = {`${error}`}
        id="values"
        name="values"
        type="text"
        value={numbers}
        onChange={handleNumbers}
      />
      <select className = {`${error}`}
        id="operation"
        name="operation"
        value={select}
        onChange={handleSelect}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default Form;
