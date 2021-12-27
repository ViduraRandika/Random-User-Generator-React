import React from "react";

//mb-0 means margin bottom 0
function HeaderBar(){
    return(
        <nav className="navbar navbar-light bg-light shadow">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Name List</span>
            </div>
        </nav>
    );
}

export default HeaderBar;