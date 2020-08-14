// React Hooks
// -> https://github.com/rehooks/awesome-react-hooks

// - https://velog.io/@velopert/react-hooks
import React, { useState, useEffect, useRef, useMemo} from 'react';

// -------------------------------------------
// for State (useState, useEffect)
// -------------------------------------------
const Counter = () => {
    //let colorList = ['red', 'blue', 'green'];
    const [currentCnt, setValue] = useState(0);
    const [color, setColor] = useState('white');

    // useRef for 'JSX' element
    const toggleColorPlaceHolder = useRef();

    // useRef for 'local variables' : changing this local variable does not invoke component rendering ! ==>
    const colorId = useRef(100);
    const setColorId = (n) => {
        colorId.current = n;
    }
    const printColorId = () => {
        console.log('Color ID changed to : ' + colorId.current);
    }
    // useRef for 'local variables' : changing this local variable does not invoke component rendering ! <==


    const changeColor = e => {
        //setColor(e.target.value);
        setColor( color === 'red' ? 'blue' : 'red');
        if( color === 'red' ) {
            //toggleColorPlaceHolder.current.style.backgroundColor = 'red';
            toggleColorPlaceHolder.current.style.color = 'red';
            setColorId(100);
            printColorId();
        }   else {
            toggleColorPlaceHolder.current.style.color = 'blue';
            setColorId(200);
            printColorId();
        }
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

    // useMemo example ==>
    const [inputNumList, setInputNumList] = useState([]);
    const [newNum, setNumber] = useState("");
    const onNewNumInputPressed = e => {
        setNumber(e.target.value);
    };
    const onInsert = e => {
        const nextList = inputNumList.concat(parseInt(newNum));
        setInputNumList(nextList);
        setNumber("");
    };
    const avg = useMemo(() => getAverage(inputNumList), [inputNumList]);
    // useMemo example <==



    return (
        <div>
            <p>Current: <b>{currentCnt}</b></p>
            <p ref={toggleColorPlaceHolder}>Color: <b>{color}</b></p>
            <button onClick={() => setValue(currentCnt + 1)}>+1</button>
            <button onClick={() => setValue(currentCnt - 1)}>-1</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={changeColor}>Toggle Color</button> <br /><br />
            <input value={newNum} onChange={onNewNumInputPressed} />
            <button onClick={onInsert}>Sum-up now</button>
            <ul>
                {inputNumList.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/* getAverage(inputNumList) -> invoke 'getAverage' every types   */}
                {/*  <b>Calculated average:</b>  */} {/* getAverage(inputNumList) */}
                <b>Calculate average only submit time:</b> {avg}
            </div>
        </div>
    );
};
const getAverage = numbers => {
    console.log("calculating average..");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
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
