import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({icon, title}) => {
    return (
        <header className="mb-0">
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <h3 className="navbar-brand mb-0"><i className={icon}/>&nbsp;&nbsp;{title}</h3>
                    <ul class="navbar-nav mr-auto" style={{flexDirection: 'row!important'}}>
                        <li class="nav-item"><Link to="/" class="nav-link">Home</Link></li>
                        <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github fa-lg'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar