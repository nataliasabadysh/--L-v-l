// Core
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const CalculateComponent = ({ a, b, text }) => {
  console.log('Render');

  const [ title, setTitle ] = useState(text);
  const [ val, setVal ] = useState(null);

  const updateTitle = () => {
    setTitle((prevTitle) => prevTitle.toUpperCase());
  };

  const sum = (first, second) => {
    console.log('Sum');
    return first + second;
  };

  useEffect(() => {
    setVal(sum(a, b));
  }, [a, b]);

  return (
    <>
      <h1>{ title }</h1>
      <h2>{ val }</h2>
      <button onClick={ updateTitle }>Update Title</button>
    </>
  )
};

const Example = () => {
  return (
    <>
      <CalculateComponent a={ 1 } b ={ 2 } text='Sum' />
    </>
  )
};
