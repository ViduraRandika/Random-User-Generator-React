import React,{Component} from 'react';

import NameListItem from '../NameList/NameListItem';

class NameListC extends Component{

    constructor(props){
        super(props);
        console.log("Constructor called!");
        this.state = {nameList: [
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
        };
    }

    componentDidMount(){
        console.log("componentDidMount Method Called");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate Method Called");
        console.log(this.state.message);
    }

    addNameHandler = () =>{
        console.log("Add Name button Clicked");
        console.log(this.state.message);
    }

    nameListComponent = () =>{
        return this.state.nameList.map((aName) => {
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

    render(){
        return(
            <div className="container mt-4">
                <button className="btn btn-primary mb-2" onClick={this.addNameHandler}>Add Name</button>
                <ul className="list-group">{this.nameListComponent()}</ul>
            </div>
        )
    }
}

export default NameListC;