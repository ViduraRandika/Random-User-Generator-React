import React from "react";
import moment from "moment";

import './NameListItem.css';

function NameListItem(props){
    return(
        <li>
            <p><img src={props.dp} alt={props.name}></img></p>
            <p style={{'color':'red'}}>Name : {props.name}</p>
            <p className="greenText">Gender : {props.gender}</p>
            <p>City : {props.city}</p>
            <p>Email : {props.email}</p>
            <p>DOB : {moment(props.dob).format('DD-MM-YYYY')} and {props.age} years old</p>
            <p>Phone : {props.phone}</p>
        </li>
    );
}

export default NameListItem;