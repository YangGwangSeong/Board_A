import React from 'react'
import LeftNavstyle from "../css/LeftNav.module.scss";

function LeftNavIcon(props) {
    
    return (
        <i className={'bx bxs-chevron-down arrow ' + `${LeftNavstyle.arrow}`} onClick={() => props.toggleClass(props.isShowMenu)}></i>
    );
}

export default LeftNavIcon;
