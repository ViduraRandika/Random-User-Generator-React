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

    return(
        <React.Fragment>
            <h1>Name List</h1>
            <ul>
                <NameListItem 
                    dp={NameList[0].picture.medium}
                    name={`${NameList[0].name.title}.${NameList[0].name.first} ${NameList[0].name.last}`} 
                    gender={NameList[0].gender}
                    city={NameList[0].city}
                    email={NameList[0].email}
                    dob={`${NameList[0].dob.date}`} 
                    age={`${NameList[0].dob.age}`}                                      
                    phone={NameList[0].phone}/>
            </ul>
            <ul>
                <NameListItem 
                    dp={NameList[1].picture.medium}
                    name={`${NameList[1].name.title}.${NameList[1].name.first} ${NameList[1].name.last}`} 
                    gender={NameList[1].gender}
                    city={NameList[1].city}
                    email={NameList[1].email}
                    dob={`${NameList[1].dob.date}`} 
                    age={`${NameList[1].dob.age}`}                                      
                    phone={NameList[1].phone}/>
            </ul>
        </React.Fragment>
    );
}

export default NameList;
