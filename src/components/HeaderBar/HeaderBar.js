import React from "react";

//mb-0 means margin bottom 0
function HeaderBar(){
    return(
        <nav class="navbar navbar-light bg-light shadow">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Name List</span>
            </div>
        </nav>
    );
}

export default HeaderBar;