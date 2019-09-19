import React from 'react';
import AppState from './App_State';
import AppHooks from './App_Hooks';
import AppContext from './App_Context';
import AppCtxReducer from './App_CtxReducer';

function App() {
  return (
    <>
      <AppState apType="sa" />
      <AppHooks />
      <AppContext />
      <AppCtxReducer />
    </>
  );
}

export default App;
