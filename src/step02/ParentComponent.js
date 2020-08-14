// --- Context Provider ---


import React, {useReducer} from "react";
import {ThemeReducer} from "./ThemeReducer";
import {ThemeCtx, myStyle} from "./ThemeCtx";

export const ParentComponent = props => {

    const [state, dispatch] = useReducer(ThemeReducer, myStyle);

    const changeStyle = e => {
        dispatch({ type: "CHANGE_COLOR" });
    };
    const resetStyle = e => {
        dispatch({ type: "RESET_COLOR" });
    };

    return (
        <ThemeCtx.Provider
            value={{
                styleState: state,
                changeStyle: changeStyle,
                resetStyle: resetStyle
            }}
        >
            <h3>- UseReducer -</h3>
            {props.children}
        </ThemeCtx.Provider>
    );
};

