import React, { useRef,useState } from 'react';
import 'boxicons';
import LeftNavstyle from "../css/LeftNav.module.scss";
import IconArrow from "./LeftNavIcon";
import IconMenu from "./IconMenu";

function LeftNav() {
    
    /*
    리액트스럽지 못한 코드... Ref도 지양해야하고, 사용자가 dom접근을 하면 최소화해야함.
    let arrow = document.querySelectorAll(".arrow");
    
    const inputEl = useRef();
    console.log(inputEl);
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle(`${LeftNavstyle.showMenu}`);
        });
    }
    */

    const [isShowMenu, setShowMenu] = useState({
        Category : false,
        Posts: false,
        Plugins: false
    });
    const { Category, Posts, Plugins } = isShowMenu; // 비구조화 할당을 통해 값 추출

    
    const toggleClass = (Tab) => {
        
        //let arrowParent = e.target.parentElement.parentElement;
        //arrowParent.classList.toggle(`${LeftNavstyle.showMenu}`);
        //이것도 Dom을 직접 변경하는거라 이렇게 하면 안된다


        //setShowMenu(!isShowMenu);
        //console.log(isShowMenu.Category);
        setShowMenu({
            ...isShowMenu, // 기존의 input 객체를 복사한 뒤
            [Tab]: !isShowMenu[Tab] // name 키를 가진 값을 value 로 설정
        });
    };

    

    return (
        <>
            <div className={`${LeftNavstyle.sidebar} `}> 
                <div className={LeftNavstyle.logo_details}>
                    <i className='bx bxl-c-plus-plus'></i>
                    <span className={LeftNavstyle.logo_name}>CodingLab</span>
                </div>
                <ul className={LeftNavstyle.nav_links}>
                    <li>
                        <a href="#">
                            <i className="bx bx-grid-alt"></i>
                            <span className={LeftNavstyle.link_name}>Dashboard</span>
                        </a>
                        <ul className={`${LeftNavstyle.sub_menu} ${LeftNavstyle.blank}`}>
                            <li><a className={LeftNavstyle.link_name} href="#">Category</a></li>
                        </ul>
                    </li>
                    <li className={Category ? `${LeftNavstyle.showMenu}` : ""}>
                        <div className={LeftNavstyle.icon_link}>
                            <a href="#">
                                <i className='bx bx-collection'></i>
                                <span className={LeftNavstyle.link_name}>Category</span>
                            </a>
                            <IconArrow  toggleClass={toggleClass} isShowMenu="Category" />
                            {/* <i className={'bx bxs-chevron-down arrow ' + `${LeftNavstyle.arrow}` }></i> */}
                        </div>
                        <ul className={LeftNavstyle.sub_menu}>
                            <li><a className={LeftNavstyle.link_name} href="#">Category</a></li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">PHP & MySql</a></li>
                        </ul>
                    </li>
                    <li className={Posts ? `${LeftNavstyle.showMenu}` : ""}>
                        <div className={LeftNavstyle.icon_link}>
                            <a href="#">
                                <i className='bx bx-book-alt'></i>
                                <span className={LeftNavstyle.link_name}>Posts</span>
                            </a>
                            <IconArrow  toggleClass={toggleClass} isShowMenu="Posts"/>
                            {/* <i className='bx bxs-chevron-down arrow'></i> */}
                        </div>
                        <ul className={LeftNavstyle.sub_menu}>
                            <li><a className={LeftNavstyle.link_name} href="#">Posts</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Card Design</a></li>
                            <li><a href="#">Login Form</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-pie-chart-alt-2' ></i>
                            <span className={LeftNavstyle.link_name}>Analytics</span>
                        </a>
                        <ul className={`${LeftNavstyle.sub_menu} ${LeftNavstyle.blank}`}>
                            <li><a className={LeftNavstyle.link_name} href="#">Analytics</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-line-chart' ></i>
                            <span className={LeftNavstyle.link_name}>Chart</span>
                        </a>
                        <ul className={`${LeftNavstyle.sub_menu} ${LeftNavstyle.blank}`}>
                            <li><a className={LeftNavstyle.link_name} href="#">Chart</a></li>
                        </ul>
                    </li>
                    <li className={Plugins ? `${LeftNavstyle.showMenu}` : ""}>
                        <div className={LeftNavstyle.icon_link}>
                            <a href="#">
                                <i className='bx bx-plug' ></i>
                                <span className={LeftNavstyle.link_name}>Plugins</span>
                            </a>
                            <IconArrow  toggleClass={toggleClass} isShowMenu="Plugins"/>
                            {/* <i className='bx bxs-chevron-down arrow'></i> */}
                        </div>
                        <ul className={LeftNavstyle.sub_menu}>
                            <li><a className={LeftNavstyle.link_name} href="#">Plugins</a></li>
                            <li><a href="#">UI Face</a></li>
                            <li><a href="#">Pigments</a></li>
                            <li><a href="#">Box Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-compass' ></i>
                            <span className={LeftNavstyle.link_name}>Explore</span>
                        </a>
                        <ul className={`${LeftNavstyle.sub_menu} ${LeftNavstyle.blank}`}>
                            <li><a className={LeftNavstyle.link_name} href="#">Explore</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-history' ></i>
                            <span className={LeftNavstyle.link_name}>History</span>
                        </a>
                        <ul className={`${LeftNavstyle.sub_menu} ${LeftNavstyle.blank}`}>
                            <li><a className={LeftNavstyle.link_name} href="#">History</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cog' ></i>
                            <span className={LeftNavstyle.link_name}>Setting</span>
                        </a>
                        <ul className={`${LeftNavstyle.sub_menu} ${LeftNavstyle.blank}`}>
                            <li><a className={LeftNavstyle.link_name} href="#">Setting</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className={LeftNavstyle.profile_details}>
                            <div className={LeftNavstyle.profile_content}>
                                <img src="image/profile.jpg" alt="profile" />
                            </div>
                            <div className={LeftNavstyle.name_job}>
                                <div className={LeftNavstyle.profile_name}>
                                    Prem Shahi
                                </div>
                                <div className={LeftNavstyle.job}>
                                    Web Desginer
                                </div>
                            </div>
                            <i className='bx bx-log-out' ></i>
                        </div>
                    </li>
                </ul>
            </div>
            <section className={LeftNavstyle.home_section}>
                <div className={LeftNavstyle.home_content}>
                    <i className='bx bx-menu' ></i>
                    <span className={LeftNavstyle.text}>Drop Down Siderbar</span>
                </div>
            </section>
        </>
    )
}

export default LeftNav;
