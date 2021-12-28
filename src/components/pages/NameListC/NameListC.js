import React,{Component} from 'react';

class NameListC extends Component{

    constructor(){
        super();
        console.log("Constructor called!");
    }

    componentDidMount(){
        console.log("componentDidMount Method Called");
    }

    addNameHandler(){
        console.log("Add Name button Clicked");
    }

    render(){
        return(
            <div className="container mt-4">
                <button className="btn btn-primary mb-2" onClick={this.addNameHandler}>Add Name</button>
                <ul className="list-group"></ul>
            </div>
        )
    }
}

export default NameListC;