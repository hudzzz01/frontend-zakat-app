import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../assets/family.png'
const Navbar = () => {
    return (
        <div className=''>
            <div classNameName="header shadow-lg">
                <nav className="navbar navbar-expand-lg bg-body-tertiary rounded p-0">
                    <div className="container-fluid bg-light-green p-3 kanit-regular fs-4">
                        <a className="navbar-brand kanit-semibold-italic bg-midle-green p-2 rounded color-darknes-green" >Zakat App</a> <img style={{width:"50px"}} src={logoImg} alt="logo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" to="/"></NavLink>
                                <NavLink className="nav-link" to="/">Dashboard</NavLink>
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                <NavLink className="nav-link" to="/input">Input</NavLink>
                                <NavLink className="nav-link" to="/about">Zakat</NavLink>
                                <NavLink className="nav-link" to="/about">Fidyah</NavLink>
                                <NavLink className="nav-link" to="/about">Sodakoh</NavLink>
                                <NavLink className="nav-link" to="/about">Laporan</NavLink>
                             
                                
       
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
}

export default Navbar;
