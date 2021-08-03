import React from 'react';
import 'boxicons';
import LeftNavstyle from "../css/LeftNav.module.scss";

function LeftNav() {
    return (
        <div className={`${LeftNavstyle.sidebar} ${LeftNavstyle.close}`}>
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
                        <i className='bx bxs-chevron-down arrow'></i>
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
                        <i className='bx bxs-chevron-down arrow'></i>
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
                        <i className='bx bxs-chevron-down arrow'></i>
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
