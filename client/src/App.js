import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="App">
      {data.map(user => (
                <li key = {user.id}>
                  {user.username}
                </li>
            ))}
    </div>
  );
}

export default App;
