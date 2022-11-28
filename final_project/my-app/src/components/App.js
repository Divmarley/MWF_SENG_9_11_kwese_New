/** @format */

import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Axios from 'axios';
export default function App() {
  const getIds = (idName) => {
    document.getElementById(idName).value = '';
  };
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [school, setSchool] = useState();
  const [data, setData] = useState();
  const BtnHandler = (e) => {
    e.preventDefault();
    // console.log(name, age, school);
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      school: school,
    }).then(() => alert('sent'));
    getIds('name');
    getIds('age');
    getIds('school');
    setData([...data, { name: name, age: age, school: school }]);
  };

  useEffect(() => {
    fetch('http://localhost:3001/alldata')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className='login-page'>
      <div className='form'>
        <form className='login-form'>
          <input
            type='text'
            id='name'
            placeholder='name'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='number'
            id='age'
            placeholder='age'
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type='text'
            id='school'
            placeholder='school'
            onChange={(e) => setSchool(e.target.value)}
          />
          <button onClick={BtnHandler}>login</button>
        </form>
        <ul>
          {data &&
            data.map((i) => (
              <li key={i.id}>
                name:{i.name} age:{i.age} school:{i.school}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
