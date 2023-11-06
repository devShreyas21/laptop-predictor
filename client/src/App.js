// import logo from './logo.svg';
// import './App.css';

import {  Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import More from './Components/More/More'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp'
import { useState } from 'react';

function App() {

  const [User, setUser] = useState({})

  return (
    <>
      <Routes>  
        <Route path="/" element={User._id && User.username ?  <Home users={User} setUsers={setUser}/> : <Login  users={User} setUsers={setUser} />} />
        <Route path="/more" element={User._id && User.username ?  <More users={User} setUsers={setUser}/> : <Login  users={User} setUsers={setUser} />} />
        <Route path="/login" element={<Login  users={User} setUsers={setUser}/>} />
        <Route path="/signUp" element={<SignUp  users={User} setUsers={setUser}/>} />
      </Routes>  

    </>
  );
}

export default App;
