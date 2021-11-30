import React from "react";
import NameListItem from "./NameListItem";

function NameList(){

    const NameList = {
        "name": {
            "title": "mr",
            "first": "brad",
            "last": "gibson"
          },
        "gender": "male",
        "city": "kilcoole",
        "email": "brad.gibson@example.com",
        "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": 26
          },
          "phone": "011-962-7516",
          "picture": {
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          },
    };

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
