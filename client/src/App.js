import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/base.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer";
import Header from "./containers/HeaderContainer";
import LeftNav from "./components/LeftNav";

//npm install node-sass@4.14.1
//npm install boxicons --save


function App() {

const [data, setData] = useState([]);

const getUsers = async () => {
  const result = await axios.get('/users');
  setData(result.data);
}

useEffect( () => {
  getUsers();
}, []);

  return (
    <div className="main_layout">
      <div className="flex">
        <div>
          <LeftNav />
        </div>
        <div>
          <Header />
            <LandingPage>
            {data.map(user => (
                      <li key = {user.id}>
                        {user.username}
                      </li>
                  ))}
            </LandingPage>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
