import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const logOut = () => {
        props.setUsers({})
    }

    return (
        <div className='bg-body-dark'>
            
            <nav className="container navbar navbar-expand-lg bg-body-dark py-3">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn mx-2" onClick={logOut}>Log Out</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
