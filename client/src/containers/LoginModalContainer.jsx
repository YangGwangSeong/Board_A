import React from 'react'
import { Route } from 'react-router-dom';
import LoginModal from "../components/LoginModal";
import Signup from "../components/Signup";

function LoginModalContainer(props) {
    const LoginMenu = props.LoginMenu;
    const toggleClass = props.toggleClass;
    return (
        <>
            <Route path="/" exact={true} component={() => <LoginModal LoginMenu={LoginMenu} toggleClass={toggleClass}/>} />
            <Route path="/signup" component={() => <Signup LoginMenu={LoginMenu} toggleClass={toggleClass}/>} />
        </>
    )
}

export default LoginModalContainer;
