import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoginLogo from '../../img/profile.png'
import './Login.css'

export default function Login(props) {

  const navigate = useNavigate()

  const [User, setUser] = useState({
    username: "",
    password: ""
  })

  const changed = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value })
    console.log(User)
  }

  const clicked = async () => {
    console.log(User)
    const result = await axios.post("http://localhost:4000/login", User)
    props.setUsers(result.data)
    navigate('/')
  }

  const signUp = () => {
    navigate('/signUp')
  }

  return (
    // <div style={{height:"100vh"}}className='d-flex justify-content-center align-items-center'>
    //   <div style={{width:"30%"}} className='shadow-lg p-3 mb-5 bg-body-tertiary'>
    //     <img width='100px' height='100px' src={LoginLogo}/>
    //     <h3 className='text-center'>Login Form</h3>
    //     <input className="form-control my-4" name='username' placeholder='username' onChange={changed}/>
    //     <input className="form-control my-4" name='password' placeholder='password' onChange={changed}/>
    //     <div className='d-flex justify-content-center'>
    //       <div className='d-flex justify-content-around' style={{width:"70%"}}>
    //         <button className='btn btn-outline-primary' onClick={clicked}>Login</button>
    //         <h5 className='pt-2'>OR</h5>
    //         <button className='btn btn-outline-primary' onClick={signUp}>SignUp</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='section d-flex justify-content-center align-items-center'>
      <div className='content p-3 mb-5 '>
        <div className='d-flex justify-content-center'>
          <div>
            <div className='d-flex justify-content-center my-3'>
              <img className='center' width='100px' height='100px' src={LoginLogo} />
            </div>
            <div>
              <h3 className='text-center'>Login Form</h3>
              <div className='ray '>
                <span> &nbsp;</span>
              </div>
              <div className='text-center my-2'>
                <input className="control my-2 rounded p-2 mx-3" name='username' placeholder='username' onChange={changed} />
                <input className="control my-2 rounded p-2 mx-3" name='password' placeholder='password' onChange={changed} />
              </div>
              <div className='d-flex justify-content-center'>
                <div className='d-flex justify-content-around' style={{ width: "70%" }}>
                  <button className='btn ' onClick={clicked}>Login</button>
                  <h5 className='pt-2 px-3'>OR</h5>
                  <button className='btn ' onClick={signUp}>SignUp</button>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
