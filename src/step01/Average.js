import React, { useState, useMemo } from "react";

const getAverage = numbers => {
    console.log("calculating average..");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
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

    return (
        <div>
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

export default Average;
