import React,{Component} from 'react';

class NameListC extends Component{

    constructor(){
        super();
        console.log("Constructor called!");
    }

    render(){
        return(
            <div className="container mt-4">
                <button className="btn btn-primary mb-2">Add Name</button>
                <ul className="list-group"></ul>
            </div>
        )
    }
}

export default NameListC;