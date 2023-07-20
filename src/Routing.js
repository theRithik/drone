import React from "react";
import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom";
import Home from "./home";
import Details from "./details";
import Order from "./order";

const Routing = ()=>{
    return(
        <BrowserRouter>
        
        <Route exact path='/drone' component={Home}/>
        <Route path='/details/:id' component={Details}/>
        <Route path='/order' component={Order}/>
        
        </BrowserRouter>
    )
}
export default Routing