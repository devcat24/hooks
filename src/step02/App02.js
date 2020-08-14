// --- placeholder component ---


import React from 'react';
import {ParentComponent} from "./ParentComponent";
import {ThemeCtxConsumer} from "./ThemeCtxConsumer";


function App02() {
    return (
        <>
            <ParentComponent>
                <ThemeCtxConsumer />
            </ParentComponent>
        </>
    );
}

export default App02;










