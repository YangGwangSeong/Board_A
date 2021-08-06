import React from 'react'
import LeftNav from "../components/LeftNav";

function LeftNavContainer(props) {
    
    return (
        <LeftNav setClose={props.setClose}/>
    )
}

export default LeftNavContainer;
