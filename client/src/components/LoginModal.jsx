import React from 'react'
import { Link } from "react-router-dom";
import Styles from "../css/LoginModal.module.scss";

function LoginModal(props) {
    const LoginMenu = props.LoginMenu;
    //Hook으로 input값들 받아서 axios사용하자.
    /*
    const submitHandler = (e) => {
        e.preventDefault();
        // state에 저장한 값을 가져옵니다.
        console.log(Email);
        console.log(Password);

        let body = {
        email: Email,
        password: Password,
        };

        axios
        .post("http://localhost:5000/api/users/login", body)
        .then((res) => console.log(res));
    };
    */
    function test(){
        alert('test');
    }
    return (
        <form
            // onSubmit={submitHandler}
        >
            <div 
                className={LoginMenu ? `${Styles.Login_Popup_Wrap}` : `${Styles.Login_Popup_Wrap} ${Styles.overlay}`}
                
            >
                <div className={Styles.loginModal}>
                    <div className={Styles.loginClose} onClick={() => props.toggleClass("LoginMenu")}>
                        &times;
                    </div>
                    <div className={Styles.modalContents}>
                        <div>로고</div>    
                    </div>
                    <input
                        name="email"
                        className={Styles.loginId}
                        type="text"
                        placeholder="아이디"
                        // onChange={this.loginHandler}
                    />
                    <input
                        name="password"
                        className={Styles.loginPw}
                        type="password"
                        placeholder="비밀번호"
                        // onChange={this.loginHandler}
                    />
                    <div className={Styles.loginMid}>
                        <div className={Styles.autoLogin}>123</div>
                        <div className={Styles.autoLogin}>아이디/비밀번호 찾기</div>
                    </div>
                    <button className={Styles.loginBtn} >
                    로그인  
                    </button>
                    <div className={Styles.loginEnd}>
                        <div className={Styles.loginLine}>
                        회원이 아니신가요? <Link to="/signup">회원가입</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default LoginModal;
