import React from 'react'
import Styles from "../../css/LandingPage.module.scss"; 


function LandingPage() {
    return (
        <div className={Styles.MainLayout_Wrapper}>
            {/* 컨텐츠 */}
            <div>
                <div className={Styles.flex}>
                    <div>웹개발</div>
                    <div>더보기</div>
                </div>
                <div className={Styles.flex}>
                    <div>
                        <div>이미지</div>
                        <div>Node</div>
                    </div>
                    <div>
                        <div>이미지</div>
                        <div>React</div>
                    </div>
                    <div>
                        <div>이미지</div>
                        <div>Typescript</div>
                    </div>
                </div>
            </div>
            {/* 컨텐츠 */}
            <div>
                <div className={Styles.flex}>
                    <div>모바일 앱 개발</div>
                    <div>더보기</div>
                </div>
                <div className={Styles.flex}>
                    <div>
                        <div>이미지</div>
                        <div>React</div>
                    </div>
                    <div>
                        <div>이미지</div>
                        <div>Node</div>
                    </div>
                    <div>
                        <div>이미지</div>
                        <div>Typescript</div>
                    </div>
                </div>
            </div>
            {/* 컨텐츠 */}
            <div>
                <div className={Styles.flex}>
                    <div>게임 개발</div>
                    <div>더보기</div>
                </div>
                <div className={Styles.flex}>
                    <div>
                        <div>이미지</div>
                        <div>React</div>
                    </div>
                    <div>
                        <div>이미지</div>
                        <div>Node</div>
                    </div>
                    <div>
                        <div>이미지</div>
                        <div>Typescript</div>
                    </div>
                </div>
            </div>
            {/* 컨텐츠 */}
            <div>
                <div className={Styles.flex}>
                    <div>알고리즘</div>
                    <div>더보기</div>
                </div>
                <div className={Styles.flex}>
                    <div>
                        <div>이미지</div>
                        <div>React</div>
                    </div>
                    <div>
                        <div>이미지</div>
                        <div>Node</div>
                    </div>
                    <div>
                        <div>이미지</div>
                        <div>Typescript</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
