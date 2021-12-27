import React from "react";
import moment from "moment";

import './NameListItem.css';

function NameListItem(props){
    return(
        <li className="list-group-item shadow">
            <div className="row align-items-center">
                <div className="col-12 col-sm-2 col-md-2">
                    <p><img src={props.dp} alt={props.name} className="border border-dark rounded-circle shadow"></img></p>
                </div>
                <div className="col col-sm col-md">
                    <h5 style={{'color':'red'}}>{props.name}</h5>
                    <p className="greenText">Gender : {props.gender}</p>
                    {props.city} | {props.email} | {props.phone}
                    <p>{moment(props.dob).format('DD-MM-YYYY')} and {props.age} years old</p>
                </div>
            </div>
        </li>
    );
}

export default NameListItem;