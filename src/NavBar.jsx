import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const [toggleBar, setToggleBar] = useState(false);

    const toggleNavbar = () => {
        setToggleBar(!toggleBar);
    }

    return (
        <>
            <section className='navbar-bg'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="http://www.google.com">VPay</a>
                        <button className="navbar-toggler" type="button" onClick={toggleNavbar} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

{/* 
    //* onClick function in above button for setState() 
    //* using useState() to toggle navbar open and close functionality by adding or removing "show" class 
*/}
                        <div className={`collapse navbar-collapse ${toggleBar ? "show" : " "}`}>

                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/service">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-style" type="submit">Sign Up</button>
                                <button className="btn btn-style btn-style-border" type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default NavBar