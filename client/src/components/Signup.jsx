import React from 'react'
import Styles from "../css/LoginModal.module.scss";

function Signup(props) {
    const LoginMenu = props.LoginMenu;
    
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
                        <div>회원가입 로고</div>    
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
                </div>
            </div>
        </form>
    )
}

export default Signup;
