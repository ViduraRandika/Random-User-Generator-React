import React, {useState,useEffect} from "react";
import NameListItem from "./NameListItem";

function NameList(){
    const [loadData, setLoadData] = useState(new Date());
    const [nameList, setNameList] = useState([
        {
        "id": 1,
        "name": {
            "title": "Mr",
            "first": "Brad",
            "last": "Gibson"
            },
        "gender": "male",
        "location": {
            "city": "Kilcoole"
        },
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
        "id": 2,
        "name": {
            "title": "Mr",
            "first": "Clifford",
            "last": "Bell"
            },
        "gender": "male",
        "location": {
            "city": "Westminster"
        },
        "email": "clifford.bell@example.com",
        "dob": {
            "date": "1996-05-11T08:58:31.195Z",
            "age": "25"
            },
            "phone": "011-962-5516",
            "picture": {
            "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
            },
        }]
    );

    useEffect(() => {
        //console.log('Render Method Called');
        fetch("https://randomuser.me/api").then(response => {
            //console.log(response);
            return response.json();
        }).then(responseData => {
            //console.log(responseData.results[0]);
            setNameList((nameList) => [...nameList, responseData.results[0]]);
        })
    }, [loadData]);

    const nameListComponent = () =>{
        return nameList.map((aName) => {
            return(
                <NameListItem 
                    key={aName.id}
                    dp={aName.picture.medium}
                    name={`${aName.name.title}.${aName.name.first} ${aName.name.last}`} 
                    gender={aName.gender}
                    city={aName.location.city}
                    email={aName.email}
                    dob={aName.dob.date} 
                    age={aName.dob.age}                                      
                    phone={aName.phone}
                />
            );
        });
    };

    const addUserHandler = () => {
        setLoadData(new Date());
     }

    //mt-4 means margin top 4
    return(
        <React.Fragment>
            <div className="container mt-4">
                <button className="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
                <ul className="list-group">{nameListComponent()}</ul>
            </div>
        </React.Fragment>
    );
}

export default NameList;
