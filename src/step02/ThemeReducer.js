// --- Context API Reducer ---
// implements actions (state change)


export const CHANGE_COLOR = 'CHANGE_COLOR';
export const RESET_COLOR = 'RESET_COLOR';

const changeColor = (state) => {
    return state.background === 'purple' ? {...state, background: 'blue'} : {...state, background: 'purple'} ;
}
const resetColor = (state) => {
    return {...state, background: 'gray', status: 'initial'} ;
}

export const ThemeReducer = (state, action) => {
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
