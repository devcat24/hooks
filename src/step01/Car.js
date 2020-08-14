// Mowgli / Akela / Baloo / Toomai / Bagheera

import React, {useContext} from "react";
// eslint-disable-next-line no-unused-vars
import {brandMarkContext_01, brandMarkContext_02} from './brandMarkContext';

const Car = (props) => {

    const addSurveyCount = () => {
        props.setSurveyCount(props.surveyCount + 1);
        props.surveyCount % 2 === 0 ? setBrandMark('#') : setBrandMark('@');
    }

    // eslint-disable-next-line no-unused-vars
    const {brandMark, setBrandMark, emblem, setEmblem} = useContext(brandMarkContext_01);

    return (
        /* <div style={{color: "red"}}>=== {props.manufacturer} Owners ===</div> */ /* ==> define css-stle directly */
        <div className='bigblue' onClick={addSurveyCount} >
            {brandMark}=== {props.manufacturer} Owners ({props.surveyCount}) ==={emblem}
        </div> /* ==> using external css file */
    );
}
export default Car; // <-- required on separate file
