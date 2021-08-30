import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/base.scss";
import Landing from "./containers/LandingPageContainer";
import Footer from "./containers/FooterContainer";
import Header from "./containers/HeaderContainer";
import LeftNav from "./containers/LeftNavContainer";

//npm install node-sass@4.14.1
//npm install boxicons --save


function App() {

const [data, setData] = useState([]);
const [isClose, setClose] = useState(true);
const [isLoginModal, setLoginModal] = useState(false);

const getUsers = async () => {
  const result = await axios.get('/users');
  setData(result.data);
}


useEffect( () => {
  getUsers();
}, []);

  return (
    <div className="flex">

      {/* 검은색오버레이 화면. */}
      <div className="overlay onmenu"></div>

      <div>
        <LeftNav setClose={setClose}/>
      </div>
      <div className={isClose ? "isClose home_section flex" : "home_section flex"}>
        <div>
          왼쪽설정
        </div>
        <div className="main_content">
          <Header />
            <Landing>
            {data.map(user => (
                      <li key = {user.id}>
                        {user.username}
                      </li>
                  ))}
            </Landing>
          <Footer />
        </div>
        <div>
          오른쪽 메뉴
        </div>
      </div>
    </div>
  );
}

export default App;
