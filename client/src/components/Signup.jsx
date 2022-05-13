import React from 'react'
import Styles from "../css/LoginModal.module.scss";

function Signup(props) {
    
    const LoginMenu = props.LoginMenu;
    
    //onsubmit 함수 만들어서 여기에 리덕스 가져온 다음에 dispatch이용해서
    //insert 요청하는 request 만들기.
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
                        className={Styles.Sign_input}
                        type="text"
                        placeholder="이메일"
                        // onChange={this.loginHandler}
                    />
                    <input
                        name="email"
                        className={Styles.Sign_input}
                        type="text"
                        placeholder="생년월일8자리(ex.19980905)"
                        // onChange={this.loginHandler}
                    />
                     <input
                        name="nickname"
                        className={Styles.Sign_input}
                        type="text"
                        placeholder="닉네임(이름)"
                        // onChange={this.loginHandler}
                    />
                    <input
                        name="password"
                        className={Styles.Sign_input}
                        type="password"
                        placeholder="비밀번호"
                        // onChange={this.loginHandler}
                    />
                    <input
                        name="password_retry"
                        className={Styles.Sign_input}
                        type="password"
                        placeholder="비밀번호 확인"
                        // onChange={this.loginHandler}
                    />
                    <button className={Styles.loginBtn} >
                    회원가입  
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Signup;
