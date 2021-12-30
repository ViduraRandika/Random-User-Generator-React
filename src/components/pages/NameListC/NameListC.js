import React,{Component} from 'react';

class NameListC extends Component{

    constructor(props){
        super(props);
        console.log("Constructor called!");
        this.state = {message: 'Hello state'};
    }

    componentDidMount(){
        console.log("componentDidMount Method Called");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate Method Called");
        console.log(this.state.message);
    }

    componentWillMount(){
        console.log("componentWillMount Method Called");
    }

    addNameHandler = () =>{
        console.log("Add Name button Clicked");
        console.log(this.state.message);
        this.setState({message: 'Hello State Changed'});
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