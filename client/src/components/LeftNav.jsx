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
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Card Design</a></li>
                        <li><a href="#">Login Form</a></li>
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
                </li>
            </ul>
        </div>
    )
}

export default LeftNav;
