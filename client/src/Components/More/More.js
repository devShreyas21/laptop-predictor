import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from "../Navbar/Navbar"


export default function More(props) {

  return (
    <>
      <NavBar />
      <div className='container'>
        <div className='row my-4'>
          <h3 className='text-center'>Default Suggestions <span style={{ textTransform: "capitalize" }}>{props.users.name}</span> !</h3>
          <div className='col-md-3 my-4'>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className='col-md-3 my-4'></div>
          <div className='col-md-3 my-4'></div>
          <div className='col-md-3 my-4'></div>
          <div className='col-md-3 my-4'></div>
        </div>
      </div>
    </>
  )
}
