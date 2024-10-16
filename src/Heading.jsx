import React from "react";

function Heading(props){
    const year = new Date().getFullYear();
    const fName = "Shaurya"
    const lName = "Arun"
    let greetings = null;
    const time = new Date().getHours();
    console.log(time);
    const styleGreetings = {
        color : null
    }

    if(time<=12 && time>=5){
        greetings="Good Morning";
        styleGreetings.color = "red";
    }
    else if(time>12 && time<=17){
        greetings="Good Afternoon";
        styleGreetings.color = "blue";
    }
    else{
        greetings="Good Night";
        styleGreetings.color = "black";
    }
    return (<h1 contentEditable="true" style={{color : "Magenta"}}>{greetings} {props.name} {props.phn} {props.email}</h1>)
}
export default Heading;