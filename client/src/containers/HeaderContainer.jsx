import React from 'react'
import Header from "../components/Header";

function HeaderContainer() {
    function test(){
        console.log("부모함수호출");
    }

    return (
        <Header test={test} />
    )
}

export default HeaderContainer;
