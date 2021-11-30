import React from "react";

function NameListItem(props){
    return(
        <li>{props.name} - {props.degree}</li>
    );
}

export default NameListItem;