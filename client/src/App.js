import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/base.scss";
//npm install node-sass@4.14.1
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer";
import Header from "./containers/HeaderContainer";
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
  );
}

export default App;
