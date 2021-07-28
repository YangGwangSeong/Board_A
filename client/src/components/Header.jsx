import React from 'react'
import Headerstyle from "../css/Header.module.scss";

function Header({test}) {
    
    test();
    return (
        <div className={Headerstyle.NavHeader}>
            헤더2
        </div>
    )
}

export default Header;
