// React Context API with Hooks

// - https://velog.io/@velopert/react-hooks
// - https://www.youtube.com/watch?v=R_7XRX7nLsw&t=1167s

import React, { useState, createContext, useContext, Component } from 'react';


// -------------------------------------------
// for Context API (createContext, useContext)
// -------------------------------------------
// children component which uses context
class WildAnimal01 extends Component {
  render(){
    return(
      <>
        <TigerContext01.Consumer>
          { (tigerCtx01) => (
            <>
              <p>{tigerCtx01.state.name}: {tigerCtx01.state.age}</p>
              <button onClick={tigerCtx01.getOlder}>Get older</button>
              <DragonContext01.Consumer>
                {(dragonCtx01) => (
                <p>&gt;&gt;&gt;{dragonCtx01.state.name}: {dragonCtx01.state.age}</p>
                )}
              </DragonContext01.Consumer>
            </>  
          )}
        </TigerContext01.Consumer>
      </>
    );
  }
}

// case #1 - using Component
const TigerContext01 = React.createContext('light');
class TigerProvider01 extends Component {
  state = {
    name: 'Tiger',
    age: 10
  }
  getOlder = () => {
    this.setState({age: this.state.age + 1});
  }
  render(){
    return (
      <TigerContext01.Provider value={{state: this.state, getOlder: this.getOlder}}>
        {this.props.children}
      </TigerContext01.Provider>
    )
  }
}
// adding second Context Component
const DragonContext01 = React.createContext();
class DragonProvider01 extends Component {
  state = {
    name: 'Dragon',
    age: 300
  }
  render(){
    return (
      <DragonContext01.Provider value={{state: this.state}}>
        {this.props.children}
      </DragonContext01.Provider>
    )
  }
}

const Animal01 = (props) => (
  <div>
    <LegendaryAnimal01 />
  </div>
);
const LegendaryAnimal01 = (props) => (
  <div>
    <WildAnimal01 />
  </div>
);

// creating context using hooks - type #01 : return simple elements
const ThemeContext01 = createContext('blue');
const ContextSample01 = (props) => {
  const theme = useContext(ThemeContext01);
  const style = {
    width: '48px',
    height: '48px',
    background: theme
  };
   return <div style={style}/>;   
};

// creating context using hooks - type #02 : return state & function
const ThemeContext02 = createContext('red');
const ContextSample02 = (props) => {
  const theme = useContext(ThemeContext02);
  //   define state - type #1
  // const style = {
  //   width: '48px',
  //   height: '48px',
  //   background: theme
  // };
  // const [myStyle, setMyStyle] = useState(style);

  //   define state - type #2
  const [myStyle, setMyStyle] = useState({
    width: '48px',
    height: '48px',
    background: theme
  });

  // can define multiple state 
  // const [myState02, setState02] = useState([]);


  // as functional component(function) can not hold function -> define it as variable using 'const'
  const changeStyle = e => {
     myStyle.background === 'green' ? setMyStyle({...myStyle, background: 'red'}) : setMyStyle({...myStyle, background: 'green'}) ;
     //myStyle.background === 'green' && console.log('green box!');
  }
  return (
    <ThemeContext02.Provider
      value={{ 
        styleState: myStyle, 
        changeStyle: changeStyle 
      }}
    >
      {props.children}
    </ThemeContext02.Provider>
  );
};

// html element using context created by type #02
const Theme02Holder = props => (
  <ThemeContext02.Consumer>
    {theme02Ctx01 => (
      <div style={theme02Ctx01.styleState} onClick={theme02Ctx01.changeStyle}>
        {props.children}
      </div>
    )}
  </ThemeContext02.Consumer>
);


function App_Context() {
  return (
    <>
      <TigerProvider01>
        <DragonProvider01>
          <Animal01 />
        </DragonProvider01>
      </TigerProvider01>
      <hr />
      <ContextSample02>
        <ContextSample01 />
        <Theme02Holder />
      </ContextSample02>
    </>
  );
}

export default App_Context;
