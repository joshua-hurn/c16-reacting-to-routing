import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/Studio_Ghibli_wordmark.svg.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/">
                    <img id="navbar-logo" className="mr-md-2" src={logo} alt="Studio Ghibli logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/films">View Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/people">View People</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar