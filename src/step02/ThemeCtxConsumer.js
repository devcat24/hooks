// --- child component consumes ThemeCtx ---


import React from "react";
import {ThemeCtx} from "./ThemeCtx";

export const ThemeCtxConsumer = props => (
    <ThemeCtx.Consumer>
        {ctx03 => (
            <>
                <div style={ctx03.styleState} onClick={ctx03.changeStyle}>
                    {props.children}

                </div><button onClick={ctx03.resetStyle}>Reset</button>
            </>
        )}
    </ThemeCtx.Consumer>
);

