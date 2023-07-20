import React from "react";
import Nav from "./nav";

const Order=()=>{
    const handleChange=(e)=>{
        console.log(e.target.value)

    }
    return(
        <>
        <Nav/>
        <div className="col-md-9" id='content' style={{display:'inline-block', position:'absolute'}}>
        <h1>Order is working</h1>
        <input type="text" className="form-control" onChange={handleChange}/>
        </div>
        </>
    )
}
export default Order