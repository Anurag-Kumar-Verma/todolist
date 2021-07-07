import React from 'react'
import '../fonts/css/all.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark px-md-2">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about"><i className="fa fa-question-circle" aria-hidden="true"></i> About</Link>
                </li>
                </ul>
                {props.searchBar ? <form className="form-inline my-2 my-lg-0 d-flex ">
                    <input className="form-control me-md-2" type="text" placeholder="Search"/>
                    <button className="btn btn-outline-success d-inline my-2 my-sm-0" type="submit">Search</button>
                </form> : ""}
            </div>
        </nav>
    )
}
// default props
// If user doesn't defined title in parent files then default props will be execute there
Header.defaultProps = {
    title: "Your Title",
    searchBar: true
}


Header.propsTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
    // If you want to required to show search bar or user must to use search bar then you shoud to use 
    // isRequired keyword
    // But default value should not to be used otherwise it will not show any effect
}
