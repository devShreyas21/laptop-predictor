import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpLogo from '../../img/add-user.png'
import './SignUp.js'

export default function SignUp() {

  const navigate = useNavigate()

  const [User, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })

  const changed = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value })
  }

  const clicked = async () => {
    await axios.post("http://localhost:4000/signUp", User)
    // alert(result.data)
    navigate('/login')
  }

  const logIn = () => {
    navigate('/login')

  }

  return (
    // <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center'>
    //   <div  style={{width:"30%"}} className='shadow-lg  p-3 mb-5 bg-body-tertiary'>
    //     <h3 className='text-center'>Sign Up - Form</h3>
    //     <input className="form-control my-4" placeholder='name' onChange={changed} name='name'/>
    //     <input className="form-control my-4" placeholder='username' onChange={changed} name='username'/>
    //     <input className="form-control my-4" placeholder='email' onChange={changed} name='email'/>
    //     <input className="form-control my-4" placeholder='password' onChange={changed} name='password'/>
    //     <div className='d-flex justify-content-center'>
    //       <div className='d-flex justify-content-around' style={{width:"70%"}}>
    //         <button className='btn btn-outline-primary' onClick={clicked}>Sign Up</button>
    //         <h5 className='pt-2'>OR</h5>
    //         <button className='btn btn-outline-primary' onClick={logIn}>Log In</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='section d-flex justify-content-center align-items-center'>
      <div className='content p-3 mb-5 '>
        <div className='d-flex justify-content-center'>
          <div className='p-4'>
            <div className='d-flex justify-content-center my-3'>
              <img className='center' width='100px' height='100px' src={SignUpLogo} />
            </div>
            <div>
              <h3 className='text-center'>Sign Up - Form</h3>
              <div className='ray '>
                <span> &nbsp;</span>
              </div>
              <div className='text-center my-2'>
                <div className=' d-flex justify-content-center px-1 '>
                  <div className='col-md-6 px-2'>
                    <input className="control m-4 rounded p-2" placeholder='name' onChange={changed} name='name' />
                    <input className="control m-4 rounded p-2" placeholder='username' onChange={changed} name='username' />
                  </div>
                  <div className='col-md-6'>
                    <input className="control m-4 rounded p-2" placeholder='email' onChange={changed} name='email' />
                    <input className="control m-4 rounded p-2" placeholder='password' onChange={changed} name='password' />
                  </div>
                </div>
                {/* <input className="control my-2 rounded p-2" name='username' placeholder='username' onChange={changed} />
                <input className="control my-2 rounded p-2" name='password' placeholder='password' onChange={changed} /> */}
              </div>
              <div className='d-flex justify-content-center'>
                <div className='d-flex justify-content-around' style={{ width: "80%" }}>
                  <button className='btn btn-outline-primary me-2' onClick={clicked}>Sign Up</button>
                  <h5 className='pt-2 '>OR</h5>
                  <button className='btn btn-outline-primary ms-2' onClick={logIn}>Log In</button>
                  {/* <button className='btn ' onClick={clicked}>Login</button>
                  <h5 className='pt-2 px-3'>OR</h5>
                  <button className='btn ' onClick={signUp}>SignUp</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
