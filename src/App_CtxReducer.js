import React, { createContext, useReducer } from 'react';

const ThemeContext03 = createContext('gray');
const ThemeContextProvider03 = props => {
  const myStyle = {
    width: "48px",
    height: "48px",
    background: "gray"
  };

  const [state, dispatch] = useReducer(themeReducer, myStyle);

  const changeStyle = e => {
    dispatch({ type: "CHANGE_COLOR" });
  };
  const resetStyle = e => {
    dispatch({ type: "RESET_COLOR" });
  };

  return (
    <ThemeContext03.Provider
      value={{
        styleState: state,
        changeStyle: changeStyle,
        resetStyle: resetStyle
      }}
    >
      {props.children}
    </ThemeContext03.Provider>
  );
};

function App_CtxReducer() {
  return (
    <>
      <ThemeContextProvider03>
        <Theme03Holder />
      </ThemeContextProvider03>
    </>
  );
}

export default App_CtxReducer;



// Context API Reducer - recommended to separated file
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const RESET_COLOR = 'RESET_COLOR';

const changeColor = (state) => {
    return state.background === 'purple' ? {...state, background: 'blue'} : {...state, background: 'purple'} ;
}
const resetColor = (state) => {
    return {...state, background: 'gray', status: 'initial'} ;
}

export const themeReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
       //return state.background === 'purple' ? {...state, background: 'blue'} : {...state, background: 'purple'} ;
       return changeColor(state);
    case RESET_COLOR:
       return resetColor(state);
    default:
      return state;
  }
};
// Context API Reducer - recommended to separated file


// --- placeholder component ---
const Theme03Holder = props => (
  <ThemeContext03.Consumer>
    {ctx03 => (
        <>
      <div style={ctx03.styleState} onClick={ctx03.changeStyle}>
        {props.children}
        
      </div><button onClick={ctx03.resetStyle}>Reset</button>
      </>
    )}
  </ThemeContext03.Consumer>
);







///---------------- before enhancement ---------------- 
// import React, { useState, createContext, useContext, useReducer } from 'react';

// const ThemeContext03 = createContext('gray');
// const ThemeContextProvider03 = (props) => {
//   const theme = useContext(ThemeContext03);
//   const [myStyle, setMyStyle] = useState({
//     width: '48px',
//     height: '48px',
//     background: theme
//   });

//   const changeStyle = e => {
//      myStyle.background === 'yellow' ? setMyStyle({...myStyle, background: 'pink'}) : setMyStyle({...myStyle, background: 'yellow'}) ;
//   }
//   return (
//     <ThemeContext03.Provider
//       value={{ 
//         styleState: myStyle, 
//         changeStyle: changeStyle 
//       }}
//     >
//       {props.children}
//     </ThemeContext03.Provider>
//   );
// };

// function App_CtxReducer() {
//     return (
//       <>
//         <ThemeContextProvider03>
//             <Theme03Holder/>
//         </ThemeContextProvider03>
//       </>
//     );
//   }

// export default App_CtxReducer;



// // --- placeholder component ---
// const Theme03Holder = props => (
//   <ThemeContext03.Consumer>
//     {ctx03 => (
//       <div style={ctx03.styleState} onClick={ctx03.changeStyle}>
//         {props.children}
//       </div>
//     )}
//   </ThemeContext03.Consumer>
// );


