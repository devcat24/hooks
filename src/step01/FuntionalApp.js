// 1. yarn global add create-react-app
// npx create-react-app react-tutorial
// yarn add node-sass
// yarn start

// 2. yarn build


import React, {useState, useEffect, useMemo} from 'react';
import {PropTypes} from 'prop-types';
//import styles from './App.css'; // -> this style is not supported anymore
import './App.css';
// === App.css ===
// body { background-color: #282c34; color: darkgrey; padding: 20px; }
// .bigblue { color: DodgerBlue; padding: 20px; }


// install sass module -> yarn add node-sass
import './AppScss.scss';
// === SassStyle.scss ===
// $textColor: yellow;
// $bgColor: white;
//
// h1 { color: $textColor; }
// .someClass { color: $textColor; background-color: $bgColor; }






// createContext -> need to create a separate file for the 'Context object' & 'state object(if it is object)' !!!

// +. Context - create context for state management using Context feature
// --- brandMarkContext.js ---
// import React, {useContext} from 'react';
//
// const brandMark = '*';
// const emblem = '#';
//
// export const brandMarkContext_01 = React.createContext(brandMark);
// export const brandMarkContext_02 = React.createContext(emblem);

import {brandMarkContext_01, brandMarkContext_02} from './brandMarkContext';


// Mowgli / Akela / Baloo / Toomai / Bagheera
import Car from './Car'; // <-- exporting from separate file
// const Car = (props) => {
//     const addSurveyCount = () => {
//         props.setSurveyCount(props.surveyCount + 1);
//
//         props.surveyCount % 2 === 0 ? setBrandMark('#') : setBrandMark('@');
//     }
//
// // +. Context - useContext : use the provided context from parent
//     const [brandMark, setBrandMark] = useContext(brandMarkContext_01);
//     const emblem = useContext(brandMarkContext_02);
//
//     return (
//         /* <div style={{color: "red"}}>=== {props.manufacturer} Owners ===</div> */ /* ==> define css-stle directly */
//         <div className='bigblue' onClick={addSurveyCount} >
//             {brandMark}=== {props.manufacturer} Owners ({props.surveyCount}) ==={emblem}
//         </div> /* ==> using external css file */
//     );
// }
// export default Car; // <-- required on separate file


const App = (props) => {
    // 'useState' hook -> state control for functional components
    const [count, setCount] = useState(1);
    const [color, toggleColor] = useState('blue');
    const [category, setCategory] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [useEffectTestNum, setUseEffectTestNum] = useState(0);

    // this state will be passed to child the component (old way)
    const [surveyCount, setSurveyCount] = useState(0);
    const [brandMark, setBrandMark] = useState("$");
    const [emblem, setEmblem] = useState("|");

    // fetch api - define state
    const [todos, setTodos] = useState([]);


    const updateColor = (count, e) => {
        console.log('updateColor event from: ' + e.target.id);
        e.preventDefault();
        count % 2 === 0 ? toggleColor('red') : toggleColor('blue');
    }
    // eslint-disable-next-line no-unused-vars
    const getTotalCars = (current) => {
        //console.log("getTotalCasrs is invoked");
        return current + 1;
    }

    const updateCategory = (msg) => {
        // adding validation to form...
        isNaN(msg) ? setCategory(msg) : setCategory('Please input String');
    }


    // 'useEffect' hook -> componentDidMount + componentDidUpdate + componentWillUnmount
    useEffect(() => {
        console.log(`App > useEffect started : component mounted `)
        document.title = `${props.owner.name} - ${color} car (${count})`;

        return () => { // cleaner function -> executed when component is disappeared or updated
            console.log(`App > useEffect started : component un-mounted `)
        }
    }) // -> execute every state changes
//}, []) // [] -> only executes once when component is mounted
//}, [useEffectTestNum]) // [state] -> deps -> only executes once when component is mounted + defined [state] are changed


    // fetch api - fetch only 'count' is updated
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/todos/${count}`
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                // this.setState({
                // data: result,
                // })
                setTodos(result)
            })
        console.log(todos);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])


    // 'useMemo' hook -> only executed when 'deps -> []' item is changed
    useMemo(() => {
        console.log(`App > useMemo : count updated`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])


    return (
        <div>
            {/* +. Context - Provider: passing state to children */}
            <brandMarkContext_01.Provider value={{brandMark, setBrandMark, emblem, setEmblem}}>
                <brandMarkContext_02.Provider value='#'>


                    {/* manufacturer -> passing prop, surveyCount -> passing state & setSurveyCount -> passing state update method*/}

                    <Car manufacturer='Tesla' surveyCount={surveyCount} setSurveyCount={setSurveyCount}/>

                    {/*<p>{props.owner} owned {count} cars and current car is : {color}</p>*/}
                    <p>{props.owner.name} owned {count} cars and current car is : {color} -> {category}</p>
                    <button id='addActionBtn01' onClick={
                        (e) => {
                            setCount(count + 1);
                            //setCount(getTotalCars(count)); // invoke additional function
                            updateColor(count, e);
                            //console.log('----> ' + e.target.id)
                        }
                    }>
                        Click me
                    </button>
                    <br/>
                    <form>
                        <input className='blackBackground' id='updateCategoryInput_id_01'
                               name='updateCategoryInput_name_01' type="text" onChange={(e) => {
                            updateCategory(e.target.value);
                            console.log('event issued from: ' + e.target.id + '<' + e.target.name + '>');
                        }}/>

                    </form>
                    <div> &gt; {todos.title}</div>
                    {/*<div>{users.map( s => s.name + " ")}</div>*/}

                </brandMarkContext_02.Provider>
            </brandMarkContext_01.Provider>


        </div>
    );
};

App.propTypes = {
//owner: PropTypes.string,
    owner: PropTypes.object,
    age: PropTypes.number
}

export default App;

// const car_owner_info = {name: 'Mowgli', age: 20}

// ReactDOM.render(<App owner="Mowgli" />, document.getElementById('root'))
// Passing object parameter
// ReactDOM.render(<App owner={car_owner_info} />, document.getElementById('root'))


