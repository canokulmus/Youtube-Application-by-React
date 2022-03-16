import React from 'react'


const Navbar = () => {


    return (

        <nav className="navbar  navbar-expand-lg navbar-dark bg-danger ">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Youtube by React</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
        </nav>

    );
}


export default Navbar;