import React from "react";

function NameListItem(props){
    return(
        <li>
            <p><img src="{props.dp}" alt="This is dp"></img></p>
            <p>Name : {props.name}</p>
            <p>Gender : {props.gender}</p>
            <p>City : {props.city}</p>
            <p>Email : {props.email}</p>
            <p>DOB : {props.dob}</p>
            <p>Phone : {props.phone}</p>
        </li>
    );
}

export default NameListItem;