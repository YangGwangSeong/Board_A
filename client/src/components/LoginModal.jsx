import React from 'react'
import { Link } from "react-router-dom";
import Styles from "../css/LoginModal.module.scss";

function LoginModal() {
    return (
        <>
            {/* 검은색오버레이 화면. 이렇게 되면 여긴 필요없을것 같은데 */}
            <div className={`${Styles.overlay} ${Styles.onmenu}`}></div>

            <div className={`${Styles.Login_Popup_Wrap} ${Styles.overlay}`}>
                <div className={Styles.loginModal}>
                    <div className={Styles.loginClose} >
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
                </div>
                <div className="loginEnd">
                    <div className="loginLine">
                      회원이 아니신가요? <Link to="/signup">회원가입</Link>
                    </div>
                    <div className="noUser">비회원 주문 조회</div>
                  </div>
            </div>
        </>
    )
}

export default LoginModal;
