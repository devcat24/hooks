// React Hooks

// - https://velog.io/@velopert/react-hooks
import React, { useState, useEffect} from 'react';

// -------------------------------------------
// for State (useState, useEffect)
// -------------------------------------------
const Counter = () => {
  //let colorList = ['red', 'blue', 'green'];
  const [currentCnt, setValue] = useState(0);
  const [color, setColor] = useState('white');

  const changeColor = e => {
    //setColor(e.target.value);
    setColor( color === 'red' ? 'blue' : 'red');
  };

  // useEffect == componentDidmount + componentDidUpdate
  //  case #01 - execute mount + every update
  useEffect(() => {
    console.log('compeleted rendering : count(' + currentCnt + '), color(' + color + ')');
  });

  //  case #02 - execute only mount
  useEffect(() => {
    console.log('only executes component mount : count(' + currentCnt + '), color(' + color + ')');
    // -> disable warning message: 'React Hook useEffect has missing dependencies: ... '
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  case #03 - execute only 'color' mount & update
  useEffect(() => {
    console.log('only executes for color : count(' + currentCnt + '), color(' + color + ')');
    // -> disable warning message: 'React Hook useEffect has missing dependencies: ... '
    // eslint-disable-next-line react-hooks/exhaustive-deps   
  }, [color]);


  //  case #04 - adding 'clean-up' method
  useEffect(() => {
    console.log('clean-up resource when count > 5 : count(' + currentCnt + '), color(' + color + ')');
    return () => {
      if( currentCnt < 5 ) {
        console.log('not enough for clean-up');
      } else {
        console.log('now cleaning up');
        setColor('white');
        setValue(0);
      }
    }
    // -> disable warning message: 'React Hook useEffect has missing dependencies: ... '
    // eslint-disable-next-line react-hooks/exhaustive-deps   
  }, [currentCnt]);

  return (
    <div>
      <p>Current: <b>{currentCnt}</b></p>
      <p>Color: <b>{color}</b></p>
      <button onClick={() => setValue(currentCnt + 1)}>+1</button>
      <button onClick={() => setValue(currentCnt - 1)}>-1</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={changeColor}>Toggle Color</button>
    </div>
  );
};



function App_Hooks() {
  return (
    <>
        <Counter />
        <hr />
    </>
  );
}

export default App_Hooks;
