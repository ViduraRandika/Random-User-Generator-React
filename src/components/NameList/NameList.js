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
            "age": 28
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
                <NameListItem 
                    dp={NameList.picture.medium}
                    name={`${NameList.name.title}.${NameList.name.first} ${NameList.name.last}`} 
                    gender={NameList.gender}
                    city={NameList.city}
                    email={NameList.email}
                    dob={`${NameList.dob.date}`} 
                    age={`${NameList.dob.age}`}                                      
                    phone={NameList.phone}/>
            </ul>
        </React.Fragment>
    );
}

export default NameList;
