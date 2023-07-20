import React from "react";
import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom";
import Home from "./home";
import Details from "./details";
import Order from "./order";
import Institute from "./admin/institute";
import Trail from "./admin/trail";

const Routing = ()=>{
    return(
        <BrowserRouter>
        
        <Route exact path='/' component={Home}/>
        <Route path='/details/:id' component={Details}/>
        <Route path='/order' component={Order}/>
        <Route path='/Admin' component={Institute}/>
        <Route path='/trail' component={Trail}/>
        </BrowserRouter>
    )
}
export default Routing