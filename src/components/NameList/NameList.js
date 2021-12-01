import React from "react";
import NameListItem from "./NameListItem";

function NameList(){

    const NameList = [{
        "name": {
            "title": "Mr",
            "first": "Brad",
            "last": "Gibson"
          },
        "gender": "male",
        "city": "kilcoole",
        "email": "brad.gibson@example.com",
        "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": "28"
          },
          "phone": "011-962-7516",
          "picture": {
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          },
    },
    {
        "name": {
            "title": "Mr",
            "first": "Clifford",
            "last": "Bell"
          },
        "gender": "male",
        "city": "Westminster",
        "email": "clifford.bell@example.com",
        "dob": {
            "date": "1996-05-11T08:58:31.195Z",
            "age": "25"
          },
          "phone": "011-962-5516",
          "picture": {
            "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
          },
    }];

    const NameListComponent = () =>{
        return NameList.map((aName) => {
            return(
                <NameListItem 
                    dp={aName.picture.medium}
                    name={`${aName.name.title}.${aName.name.first} ${aName.name.last}`} 
                    gender={aName.gender}
                    city={aName.city}
                    email={aName.email}
                    dob={aName.dob.date} 
                    age={aName.dob.age}                                      
                    phone={aName.phone}
                />
            );
        });
    };

    return(
        <React.Fragment>
            <h1>Name List</h1>
            <ul>
                {NameListComponent()}
            </ul>
        </React.Fragment>
    );
}

export default NameList;
