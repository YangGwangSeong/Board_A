import React, { useRef } from 'react';
import 'boxicons';
import LeftNavstyle from "../css/LeftNav.module.scss";
import LeftNavIcon from "./LeftNavIcon";

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

    return (
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
                <li>
                    <div className={LeftNavstyle.icon_link}>
                        <a href="#">
                            <i className='bx bx-collection'></i>
                            <span className={LeftNavstyle.link_name}>Category</span>
                        </a>
                        <LeftNavIcon />
                        {/* <i className={'bx bxs-chevron-down arrow ' + `${LeftNavstyle.arrow}` }></i> */}
                    </div>
                    <ul className={LeftNavstyle.sub_menu}>
                        <li><a className={LeftNavstyle.link_name} href="#">Category</a></li>
                        <li><a href="#">HTML & CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                        <li><a href="#">PHP & MySql</a></li>
                    </ul>
                </li>
                <li>
                    <div className={LeftNavstyle.icon_link}>
                        <a href="#">
                            <i className='bx bx-book-alt'></i>
                            <span className={LeftNavstyle.link_name}>Posts</span>
                        </a>
                        <LeftNavIcon />
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
                <li>
                    <div className={LeftNavstyle.icon_link}>
                        <a href="#">
                            <i className='bx bx-plug' ></i>
                            <span className={LeftNavstyle.link_name}>Plugins</span>
                        </a>
                        <LeftNavIcon />
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
    )
}

export default LeftNav;
