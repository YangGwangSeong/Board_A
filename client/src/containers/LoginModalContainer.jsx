import React from 'react'
import { Route,Switch } from 'react-router-dom';
import LoginModal from "../components/LoginModal";
import Signup from "../components/Signup";

// 여기서 로그인 dispatch 함수 가져와서 Route로 보내주기
// containers에서 api dispatch 함수로 useSelector data결과 변수에 담긴거 Route에 보내기

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
