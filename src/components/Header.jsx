import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
const Header = () => {
    const { pathname } = useLocation();
    return (
        <header className="bg-light">
            <nav className="navbar navbar-expand-lg navbar-light container">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === "/product" ? "active" : ""}`} to="/product">Product</Link>
                            </li>


                        </ul>
                        <div className="d-flex ">
                            <form className="d-flex me-2">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <div className="d-flex" style={{alignItems: "center"}}> 
                                <Link to="/cart" className="d-flex" style={{ color: "unset",padding: "5px",
                                alignItems:"center" }}>
                                    <i className="fas fa-shopping-cart fs-5" />
                                </Link>
                                <span style={{
                                    paddingRight: "5px",
                                    paddingLeft: "5px",
                                    display: "block",
                                    color: "white",
                                    background: "red",
                                    borderRadius:"5px"
                                }}>0</span>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
