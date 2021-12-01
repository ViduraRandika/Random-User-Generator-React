import React from "react";
import moment from "moment";

function NameListItem(props){
    return(
        <li>
            <p><img src={props.dp} alt="This is dp"></img></p>
            <p>Name : {props.name}</p>
            <p>Gender : {props.gender}</p>
            <p>City : {props.city}</p>
            <p>Email : {props.email}</p>
            <p>DOB : {moment(props.dob).format('DD-MM-YYYY')} and {props.age} years old</p>
            <p>Phone : {props.phone}</p>
        </li>
    );
}

export default NameListItem;