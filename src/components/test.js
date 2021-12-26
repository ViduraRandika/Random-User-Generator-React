import React from "react";

//this is a function component
function Fun(){

//this is an object array. there are 02 elements now
const object = [{
    "name" : "Dilshan",
    "email" : "a@gmail.com"},
{
    "name" : "Sahan",
    "email" : "s@gmail.com"
}];

//this is arrow function with map function
const ArrowFunction = () => {
    return object.map((aName) => {
        return(
            <div>
                <p>{aName.name}</p>
                <p>{aName.email}</p>
            </div>
        );
    });
};

    return(
        <React.Fragment>
            {ArrowFunction()}
        </React.Fragment>
    );
};

export default Fun;

