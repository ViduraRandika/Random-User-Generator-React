import React from "react";

//mb-0 means margin bottom 0
function HeaderBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Name List</span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Show Name List</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderBar;