import React from 'react';
import AppState from './App_State';
import AppHooks from './App_Hooks';
import AppContext from './App_Context';
import AppCtxReducer from './App_CtxReducer';
import FuntionalApp from './FuntionalApp';


function App01() {
    const car_owner_info = {name: 'Mowgli', age: 20}

    return (
        <>
            <FuntionalApp owner={car_owner_info} />

            <br /><br />
            <AppState apType="sa" />
            <AppHooks />
            <AppContext />
            <hr />
            <AppCtxReducer />


        </>
    );
}

export default App01;