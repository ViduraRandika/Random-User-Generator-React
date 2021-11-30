import React from "react";
import NameListItem from "./NameListItem";

function NameList(){
    return(
        <React.Fragment>
            <h1>Name List</h1>
            <ul>
                <NameListItem name="Dilshan" degree="CST"/>
                <NameListItem name="Mahesh" degree="IIT"/>
                <NameListItem name="Idunil" degree="MRT"/>
                <NameListItem name="Asmika" degree="SCT"/>
            </ul>
        </React.Fragment>
    );
}

export default NameList;
